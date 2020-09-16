// import { Post } from "./database/entity/post";
import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection()
  .then(async (connection) => {
    await connection.runMigrations();
    console.log("db connected");

    // const post = new Post();
    // post.title = "karnati shravan kumar";

    // const p = await connection.manager.save(post);
    // console.log("created", p);
  })
  .catch((error) => console.log(error));
