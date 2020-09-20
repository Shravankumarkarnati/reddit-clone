import { Connection } from "typeorm";
import { UserResponse, detailsType } from "./../../api/resolvers/userResolver";
import { User } from "../../database/entity/user";
import { usernameValid, passwordValid, validationErrorCodes } from "./helpers";

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
  if (!usernameValid(details.username)) {
    return {
      error: [
        {
          property: "username",
          errorCode: validationErrorCodes.usernameFormatError,
        },
      ],
    };
  }

  if (!passwordValid(details.password)) {
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
