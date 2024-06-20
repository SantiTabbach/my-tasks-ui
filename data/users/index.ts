import { User } from "@/models/models";
import { sendGetRequest } from "../config";
import { adaptUserData } from "./adapters";

const ENDPOINTS = {
  USERS: "users",
};

const getUserByIdUrl = (userId: string): string => {
  return `${ENDPOINTS.USERS}/${userId}`;
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
    console.log(error);
  }
};
