import { User } from "@/models";
import { sendPostRequest } from "../config";
import { adaptUserData } from "../users/adapters";
import { IAuthBody, IAuthResponseDTO, ICreateUserBody } from "./models";

const ENDPOINTS = {
  AUTH: "auth",
  USERS: "users",
};

const getAuthUrl = (): string => {
  return `${ENDPOINTS.AUTH}`;
};

const createNewUserUrl = (): string => {
  return `${ENDPOINTS.USERS}`;
};

export const signIn = async (body: IAuthBody): Promise<IAuthResponseDTO> => {
  try {
    let tokens;
    const response = await sendPostRequest(getAuthUrl(), body);

    if (response.success) {
      tokens = response.data;
    }

    return tokens;
  } catch (error) {
    const errorMessage = `While trying to sign in: ${error}`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
};

export const signUp = async (
  body: ICreateUserBody
): Promise<User | undefined> => {
  try {
    let user;
    const response = await sendPostRequest(createNewUserUrl(), {
      ...body,
      roles: [...body.roles],
    });

    if (response.success) {
      user = adaptUserData(response.data);
    }

    return user;
  } catch (error) {
    const errorMessage = `While trying to create new user: ${error}`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
};
