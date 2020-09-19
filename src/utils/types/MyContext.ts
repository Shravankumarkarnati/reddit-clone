import { Response, Request } from "express";
import { Connection } from "typeorm";

export type MyContext = {
  connection: Connection;
  req: Request;
  res: Response;
};
