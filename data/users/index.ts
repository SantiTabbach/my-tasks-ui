import { User } from "@/models/models";
import { sendGetRequest, sendPostRequest } from "../config";
import { adaptUserData } from "./adapters";
import { ICreateUserBody } from "./models";

const ENDPOINTS = {
  USERS: "users",
};

const getUserByIdUrl = (userId: string): string => {
  return `${ENDPOINTS.USERS}/${userId}`;
};

const createNewUserUrl = (): string => {
  return `${ENDPOINTS.USERS}`;
};

export const getUserById = async (
  userId: string
): Promise<User | undefined> => {
  try {
    let user;
    const response = await sendGetRequest(getUserByIdUrl(userId));

    if (response.success) {
      user = adaptUserData(response.data);
    }

    return user;
  } catch (error) {
    const errorMessage = `While trying to fetch user info: ${error}`;
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
