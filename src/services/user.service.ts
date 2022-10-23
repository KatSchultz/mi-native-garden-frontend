import { api } from "../libs/axios";
import { User } from "../types/user.types";

export async function createUser(data: Partial<User>) {
  const response = await api.post<User>("/users", data);
  return response.data;
}

export async function getUser(userId: string) {
  const response = await api.get<User>(`/users/${userId}`);
  return response.data;
}
