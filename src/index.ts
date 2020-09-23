import { UserResolver } from "./api/resolvers/userResolver";
import "reflect-metadata";
import { PostResolver } from "./api/resolvers/postResolver";
import { createConnection } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./api/resolvers/helloResolver";
import session from "express-session";
import Redis from "ioredis";
import redisConnect from "connect-redis";
import cors from "cors";
// import morgan from "morgan";

createConnection()
  .then(async (connection) => {
    try {
      await connection.runMigrations();
    } catch (err) {
      console.log("migration error", err);
    }
    console.log("db connected");
    const app = express();

    const RedisStore = redisConnect(session);
    const redisClient = new Redis();

    app.use(
      cors({
        origin: "http://localhost:3000",
        credentials: true,
      })
    );

    // app.use(morgan("combined"));

    app.use(
      session({
        name: "sid",
        store: new RedisStore({ client: redisClient, disableTouch: true }),
        secret: "keyboard cat",
        resave: false,
        cookie: {
          maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
          sameSite: "lax",
          httpOnly: true,
          secure: process.env.node_env === "PRODUCTION",
        },
        saveUninitialized: false,
      })
    );

    const graphQLServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [HelloResolver, PostResolver, UserResolver],
        validate: false,
      }),
      context: ({ req, res }) => ({ connection, req, res, redisClient }),
    });

    graphQLServer.applyMiddleware({ app, cors: false });

    app.listen(4000, () => {
      console.log("Server running on port 4000");
    });
  })
  .catch((error) => console.log(error));
