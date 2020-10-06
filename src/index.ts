import { ApolloServer } from "apollo-server-express";
import redisConnect from "connect-redis";
import cors from "cors";
import express from "express";
import session from "express-session";
import Redis from "ioredis";
import morgan from "morgan";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { HelloResolver } from "./api/resolvers/helloResolver";
import { PostResolver } from "./api/resolvers/postResolver";
import { UserResolver } from "./api/resolvers/userResolver";
import { dataLoader } from "./utils/middleware/dataLoader";
// import { genUserMockData } from "./utils/mockData/mockData";
// import { genPostsMockData } from "./utils/mockData/mockData";
require("dotenv").config();

createConnection()
  .then(async (connection) => {
    try {
      await connection.runMigrations();
      // await genUserMockData(connection);
      // await genPostsMockData(connection);
    } catch (err) {
      console.log("migration error", err);
    }
    console.log("postgresql connected");
    const app = express();

    const RedisStore = redisConnect(session);
    const redisClient =
      process.env.NODE_ENV === "production"
        ? new Redis(process.env.REDIS_URL)
        : new Redis();
    if (process.env.NODE_ENV === "production") app.set("trust proxy", 1);
    app.use(
      cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
      })
    );
    if (process.env.NODE_ENV === "production") app.use(morgan("combined"));

    app.use(
      session({
        name: "sid",
        store: new RedisStore({ client: redisClient, disableTouch: true }),
        secret: process.env.SESSION_SECRET,
        resave: false,
        cookie: {
          maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
          sameSite: "lax",
          httpOnly: true,
          secure: process.env.NODE_ENV === "PRODUCTION",
          domain:
            process.env.NODE_ENV === "PRODUCTION"
              ? process.env.COOKIE_DOMAIN
              : "",
        },
        saveUninitialized: false,
      })
    );
    const bass = dataLoader(connection);
    const graphQLServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [HelloResolver, PostResolver, UserResolver],
        validate: false,
      }),
      context: ({ req, res }) => ({
        connection,
        req,
        res,
        redisClient,
        userLoader: bass.userLoader(),
        voteStatusLoader: bass.voteStatusLoader(),
      }),
    });

    graphQLServer.applyMiddleware({ app, cors: false });

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log(error));
