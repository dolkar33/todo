import { axiosInstance } from "@/config/axiosInstance";

export const register = ({ email, password }) => {
  const response = axiosInstance.post(`/register`, { email, password });
  return response;
};
