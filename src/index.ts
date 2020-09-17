import { UserResolver } from "./api/resolvers/userResolver";
import "reflect-metadata";
import { PostResolver } from "./api/resolvers/postResolver";
import { createConnection } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./api/resolvers/helloResolver";

createConnection()
  .then(async (connection) => {
    await connection.runMigrations();
    console.log("db connected");

    const app = express();

    const graphQLServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [HelloResolver, PostResolver, UserResolver],
        validate: false,
      }),
      context: () => ({ connection }),
    });

    graphQLServer.applyMiddleware({ app });

    app.listen(4000, () => {
      console.log("Server running on port 4000");
    });
  })
  .catch((error) => console.log(error));

// const post = new Post();
// post.title = "karnati shravan kumar";

// const p = await connection.manager.save(post);
// console.log("created", p);
