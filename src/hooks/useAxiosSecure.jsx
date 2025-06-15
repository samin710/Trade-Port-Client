import axios from "axios";
import React, { use, useEffect } from "react";
import { AuthContext } from "../providers/AuthContext";

const axiosInstance = axios.create({
  baseURL: "https://b2b-wholesale-platform-server.vercel.app",
});

const useAxiosSecure = () => {
  const { user, logout, loading } = use(AuthContext);

  useEffect(() => {
    if (!loading && user?.accessToken) {
      // Add request interceptor
      const requestInterceptor = axiosInstance.interceptors.request.use(
        (config) => {
          config.headers.authorization = `Bearer ${user.accessToken}`;
          config.headers.email = user.email;
          return config;
        }
      );

      // Add response interceptor
      const responseInterceptor = axiosInstance.interceptors.response.use(
        (res) => res,
        (err) => {
          if (err?.response?.status === 401 || err?.response?.status === 403) {
            logout()
              .then(() => {
                console.log("Logged out due to token issue.");
              })
              .catch(console.error);
          }
          return Promise.reject(err);
        }
      );

      // Cleanup to prevent multiple interceptors on re-renders
      return () => {
        axiosInstance.interceptors.request.eject(requestInterceptor);
        axiosInstance.interceptors.response.eject(responseInterceptor);
      };
    }
  }, [user, loading, logout]);

  return axiosInstance;
};

export default useAxiosSecure;
