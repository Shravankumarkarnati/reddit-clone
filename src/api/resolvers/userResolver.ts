import { forgotPasswordMail } from "./../../utils/email/nodemailer";
import argon2 from "argon2";
import {
  passwordValid,
  validationErrorCodes,
} from "../../utils/validations/helpers";
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
import { registerChecker } from "./../../utils/validations/checks";

import { v4 as uuid } from "uuid";

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
    const validation = await registerChecker(connection, details);

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
    const userRepo = connection.getRepository(User);
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
            errorCode: validationErrorCodes.incorrectUsername,
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

  @Mutation(() => Boolean)
  async forgotPassword(
    @Arg("email") email: string,
    @Ctx() { redisClient, connection }: MyContext
  ): Promise<Boolean> {
    // console.log("wut?");
    const userRepo = connection.getRepository(User);
    const user = await userRepo.findOne({ email: email });
    if (!user) return true;
    const token = uuid();
    const uri = `http://localhost:3000/resetpassword/${token}`;
    await redisClient.set(
      `forgot-password:${token}`,
      user.id,
      "ex",
      1000 * 60 * 60 * 24
    );
    forgotPasswordMail(
      user.email as string,
      `<a href=${uri}>Reset Password</a>`
    );
    return true;
  }

  @Mutation(() => UserResponse)
  async resetPassword(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Arg("token") token: string,
    @Arg("confirmPassword") confirmPassword: string,
    @Ctx() { connection, redisClient }: MyContext
  ): Promise<UserResponse> {
    if (password !== confirmPassword) {
      return {
        error: [
          {
            property: "password",
            errorCode: validationErrorCodes.confirmPasswordNotSame,
          },
        ],
      };
    }
    if (!passwordValid(password)) {
      return {
        error: [
          {
            property: "password",
            errorCode: validationErrorCodes.passwordFormatError,
          },
        ],
      };
    }
    const userRepo = connection.getRepository(User);
    const user = await userRepo.findOne({ email: email });
    if (!user) {
      return {
        error: [
          {
            property: "email",
            errorCode: validationErrorCodes.inCorrectEmail,
          },
        ],
      };
    }

    const response = await redisClient.get(`forgot-password:${token}`);
    if (response) {
      const confirmUser = await userRepo.findOne({ id: parseInt(response) });
      if (confirmUser?.email === email) {
        confirmUser.password = await argon2.hash(password);
        const userAfterReset = await userRepo.save(confirmUser);
        return {
          user: userAfterReset,
        };
      }
    }
    return {
      error: [
        {
          property: "uuid",
          errorCode: validationErrorCodes.uuidExpired,
        },
      ],
    };
  }
}
