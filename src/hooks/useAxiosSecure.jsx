import axios from "axios";
import React, { use } from "react";
import { AuthContext } from "../providers/AuthContext";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const { user } = use(AuthContext);

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    config.headers.email = user.email;
    return config;
  });
  return axiosInstance;
};

export default useAxiosSecure;
