import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
import { token, setToken } from "../utilities/security";

const baseApi = axios.create({
  baseURL: "http://localhost:3030",
});

// baseApi.defaults.headers.common["Authorization"] = AUTH_TOKEN;

export const getUser = async () => {
  const response = await baseApi.get("/users");
  return response;
};

export const login = async (user) => {
  try {
    const response = await baseApi.post("/auth/login", {
      ...user,
      validateStatus: function (status) {
        return status === 201;
      },
    });
    return response;
  } catch (e) {
    throw new Error("Username and Password is incorrect");
  }
};

export const validateLogin = async (token) => {
  try {
    token = token.trim(token.replace("Bearer ", ""));
    console.log(token);
    const response = await baseApi.get("/users", {
      headers: {
        Authorization: token,
      },
    });
    return response;
  } catch (e) {}
};
