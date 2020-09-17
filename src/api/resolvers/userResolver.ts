import { User } from "./../../database/entity/user";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
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
  @Mutation(() => UserResponse)
  async registerUser(
    @Arg("details") details: UsernamePasswordType,
    @Ctx() { connection }: any
  ) {
    const userRepo = await connection.getRepository(User);
    const user = new User();
    user.username = details.username;
    user.password = await argon2.hash(details.password);
    try {
      return {
        user: await userRepo.save(user),
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
    @Ctx() { connection }: any
  ): Promise<UserResponse> {
    const userRepo = await connection.getRepository(User);
    const user = await userRepo.findOne({ username: details.username });
    if (user) {
      const valid = await argon2.verify(user.password, details.password);
      if (valid) {
        return {
          error: [],
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
}
