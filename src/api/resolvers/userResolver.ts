import argon2 from "argon2";
import { validationErrorCodes } from "../../utils/validations/helpers";
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
import { User } from "./../../database/entity/user";
import { MyContext } from "./../../utils/types/MyContext";
import { checker } from "./../../utils/validations/checks";

@InputType()
export class detailsType {
  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  email: string;
}

@InputType()
export class loginUserType {
  @Field()
  username!: string;

  @Field()
  password!: string;
}

@ObjectType()
class SignError {
  @Field()
  property: string;
  @Field()
  errorCode: number;
}

@ObjectType()
export class UserResponse {
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
    @Arg("details") details: detailsType,
    @Ctx() { connection, req }: MyContext
  ): Promise<UserResponse> {
    const validation = await checker(connection, details);

    if (validation.error) {
      return validation;
    }
    const userRepo = connection.getRepository(User);
    const user = new User();
    user.username = details.username;
    user.email = details.email;
    user.password = await argon2.hash(details.password);
    const createdUser = await userRepo.save(user);
    if (req.session) {
      req.session.userId = createdUser.id;
    }
    return {
      user: createdUser,
    };
  }

  @Mutation(() => UserResponse)
  async loginUser(
    @Arg("details") details: loginUserType,
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
          error: [
            {
              property: "password",
              errorCode: validationErrorCodes.inCorrectPassword,
            },
          ],
        };
      }
    } else {
      return {
        error: [
          {
            property: "username",
            errorCode: validationErrorCodes.usernameDoesntExist,
          },
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
