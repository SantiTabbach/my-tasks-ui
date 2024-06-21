export type Role = "User" | "Admin";

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles: Set<Role>;
  active: boolean;
}

export interface Task {
  id: string;
  owner: string;
  title: string;
  description: string;
  completed: boolean;
  createdDate: Date;
  updatedDate: Date;
  dateToComplete: Date;
}
