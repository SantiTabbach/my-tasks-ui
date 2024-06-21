import { Role, User } from "@/models/models";

export interface UserDTO {
  _id: string;
  username: string;
  avatar?: string;
  roles: Set<Role>;
  active: boolean;
  __v: number;
}

export interface ICreateUserBody extends Omit<User, "id" | "active"> {
  password: string;
}
