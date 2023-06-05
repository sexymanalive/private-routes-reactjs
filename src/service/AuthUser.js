import api from "../utils/api";

export const LOGIN = async ({ username, password }) => {
  const response = await api.post("/auth/login", { username, password });
  return response.data;
};
