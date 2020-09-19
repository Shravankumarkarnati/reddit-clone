import { MyContext } from "./../../utils/types/MyContext";
import { User } from "./../../database/entity/user";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";

import argon2 from "argon2";

@InputType()
class UsernamePasswordType {
  @Field()
  username: string;

  @Field()
  password: string;
}

@ObjectType()
class SignError {
  @Field()
  property: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [SignError], { nullable: true })
  error?: SignError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req, connection }: MyContext) {
    if (req.session?.userId) {
      return await connection.getRepository(User).findOne(req.session.userId);
    } else {
      return null;
    }
  }

  @Mutation(() => UserResponse)
  async registerUser(
    @Arg("details") details: UsernamePasswordType,
    @Ctx() { connection, req }: MyContext
  ): Promise<UserResponse> {
    if (details.username.length < 3) {
      return {
        error: [
          {
            property: "username",
            message: "Username Length cannot be less than 3",
          },
        ],
      };
    }
    if (details.password.length < 3) {
      return {
        error: [
          {
            property: "password",
            message: "Password Length cannot be less than 3",
          },
        ],
      };
    }
    const userRepo = await connection.getRepository(User);
    const user = new User();
    user.username = details.username;
    user.password = await argon2.hash(details.password);
    try {
      const createdUser = await userRepo.save(user);
      if (req.session) {
        req.session.userId = createdUser.id;
      }
      return {
        user: createdUser,
      };
    } catch (err) {
      if (err.code === "23505") {
        return {
          error: [
            {
              property: "username",
              message: "Username already exists",
            },
          ],
        };
      }
    }
    return {};
  }

  @Mutation(() => UserResponse)
  async loginUser(
    @Arg("details") details: UsernamePasswordType,
    @Ctx() { connection, req }: MyContext
  ): Promise<UserResponse> {
    const userRepo = await connection.getRepository(User);
    const user = await userRepo.findOne({ username: details.username });
    if (user) {
      const valid = await argon2.verify(
        user.password as string,
        details.password
      );
      if (valid) {
        if (req.session) {
          req.session.userId = user.id;
        }
        return {
          user: user,
        };
      } else {
        return {
          error: [{ property: "password", message: "Incorrect Password" }],
        };
      }
    } else {
      return {
        error: [
          { property: "username", message: "That username doesnt exist" },
        ],
      };
    }
  }

  @Mutation(() => Boolean)
  async logoutUser(@Ctx() { req, res }: MyContext): Promise<Boolean> {
    return new Promise((response) => {
      req.session?.destroy((err) => {
        if (err) {
          response(false);
        } else {
          res.clearCookie("sid");
          response(true);
        }
      });
    });
  }
}
