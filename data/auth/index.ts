import { sendPostRequest } from "../config";
import { IAuthBody, IAuthResponseDTO } from "./models";

const ENDPOINTS = {
  AUTH: "auth",
};

const getAuthUrl = (): string => {
  return `${ENDPOINTS.AUTH}`;
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
