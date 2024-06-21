import { User } from "@/models";

export interface IAuthBody {
  username: string;
  password: string;
}

export interface IAuthResponseDTO {
  accessToken: string;
  refreshToken?: string; //TODO: Check ?
}

export interface ICreateUserBody extends Omit<User, "id" | "active"> {
  password: string;
}
