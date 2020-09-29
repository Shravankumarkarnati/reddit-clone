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
require("dotenv-safe").config();

createConnection()
  .then(async (connection) => {
    try {
      await connection.runMigrations();
    } catch (err) {
      console.log("migration error", err);
    }
    console.log("postgresql connected");
    const app = express();

    const RedisStore = redisConnect(session);
    const redisClient = new Redis(process.env.REDIS_DB_URL);

    app.use(
      cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
      })
    );

    app.use(morgan("combined"));

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
          secure: process.env.node_env === "PRODUCTION",
          domain:
            process.env.node_env === "PRODUCTION"
              ? process.env.CORS_ORIGIN
              : undefined,
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
