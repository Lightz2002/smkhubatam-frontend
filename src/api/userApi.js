import axios from "axios";
import { getToken } from "../utilities/security";

const baseApi = axios.create({
  baseURL: "http://localhost:3030",
});

// baseApi.defaults.headers.common["Authorization"] = AUTH_TOKEN;
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

export const logout = async (user) => {
  try {
  } catch (e) {}
};

export const initial = async () => {
  try {
    const response = await baseApi.get("/profile", {
      headers: {
        Authorization: getToken(),
      },
    });
    return response;
  } catch (e) {
    throw e;
  }
};

export const getUsers = async () => {
  try {
    const response = await baseApi.get("/users", {
      headers: {
        Authorization: getToken(),
      },
    });
    return response;
  } catch (e) {
    throw e;
  }
};

export const createUser = async (user) => {
  try {
    const response = await baseApi.post(
      "/users",
      {
        ...user,
        validateStatus: function (status) {
          return status === 201;
        },
      },
      {
        headers: {
          Authorization: getToken(),
        },
      }
    );
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getRoles = async () => {
  try {
    const response = await baseApi.get("/roles", {
      headers: {
        Authorization: getToken(),
      },
    });
    return response;
  } catch (e) {
    throw e;
  }
};

export const getMenusByRole = async (role) => {
  try {
    const response = await baseApi.get(`/roles/${role}`, {
      headers: {
        Authorization: getToken(),
      },
    });
    return response;
  } catch (e) {
    throw e;
  }
};
