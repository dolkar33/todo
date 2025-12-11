import { axiosInstance } from "@/config/axiosInstance";

export const login = ({ email, password }) => {
  const response = axiosInstance.post(`/login`, { email, password });
  return response;
};
