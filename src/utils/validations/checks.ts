import { Connection } from "typeorm";
import { User } from "../../database/entity/user";
import { detailsType, UserResponse } from "./../../api/resolvers/userResolver";
import { validationErrorCodes } from "./helpers";

export const registerChecker = async (
  connection: Connection,
  details: detailsType
): Promise<UserResponse> => {
  const userRepo = connection.getRepository(User);

  const usernameCheck = await userRepo.findOne({
    username: details.username,
  });
  if (usernameCheck?.username === details.username) {
    return {
      error: [
        {
          property: "username",
          errorCode: validationErrorCodes.usernameExistsError,
        },
      ],
    };
  }

  const emailCheck = await userRepo.findOne({ email: details.email });
  if (emailCheck?.email === details.email) {
    return {
      error: [
        {
          property: "email",
          errorCode: validationErrorCodes.emailExistsError,
        },
      ],
    };
  }
  //// Strong Validations //// CODE START

  // if (!usernameValid(details.username)) {
  //   return {
  //     error: [
  //       {
  //         property: "username",
  //         errorCode: validationErrorCodes.usernameFormatError,
  //       },
  //     ],
  //   };
  // }

  // if (!passwordValid(details.password)) {
  //   return {
  //     error: [
  //       {
  //         property: "password",
  //         errorCode: validationErrorCodes.passwordFormatError,
  //       },
  //     ],
  //   };
  // }

  //// Strong Validations //// CODE END

  if (details.username.length < 5) {
    return {
      error: [
        {
          property: "username",
          errorCode: validationErrorCodes.usernameFormatError,
        },
      ],
    };
  }

  if (details.password.length < 8) {
    return {
      error: [
        {
          property: "password",
          errorCode: validationErrorCodes.passwordFormatError,
        },
      ],
    };
  }

  return {};
};
