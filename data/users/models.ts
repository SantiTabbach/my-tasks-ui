import { Role } from "@/models/models";

export interface UserDTO {
  _id: string;
  username: string;
  avatar?: string;
  roles: Set<Role>;
  active: boolean;
  __v: number;
}
