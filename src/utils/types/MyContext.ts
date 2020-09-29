import { userLoader, voteStatusLoader } from "./../middleware/dataLoader";
import { Redis } from "ioredis";
import { Response, Request } from "express";
import { Connection } from "typeorm";

export type MyContext = {
  connection: Connection;
  req: Request;
  res: Response;
  redisClient: Redis;
  userLoader: ReturnType<typeof userLoader>;
  voteStatusLoader: ReturnType<typeof voteStatusLoader>;
};
