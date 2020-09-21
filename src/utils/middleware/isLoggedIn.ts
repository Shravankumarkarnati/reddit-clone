import { MyContext } from "./../types/MyContext";
import { MiddlewareFn } from "type-graphql";

export const isLoggedIn: MiddlewareFn<MyContext> = ({ context }, next) => {
  if (!context.req.session?.userId) {
    throw new Error("Not Logged In");
  }
  return next();
};
