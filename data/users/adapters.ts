import { User } from "@/models";
import { UserDTO } from "./models";

export const adaptUserData = (user: UserDTO): User => {
  return {
    username: user.username,
    avatar: user.avatar,
    roles: user.roles,
    id: user._id,
    active: user.active,
  };
};
