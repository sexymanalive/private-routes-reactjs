import api from "../utils/api";

const GET_ALL_USER = async () => {
  const response = await api.get("/users");
  return response.data;
};
