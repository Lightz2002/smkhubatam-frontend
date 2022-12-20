import {
  getUsers,
  createUser,
  getRoles,
  initial,
  getMenusByRole,
} from "./userApi";
import { token, setToken, getToken } from "../utilities/security";
import { redirect } from "react-router-dom";

export const authenticateQuery = () => ({
  queryKey: ["isAuthenticated"],
  queryFn: async () => {
    const localToken = getToken();
    const loggedIn = await initial(localToken);
    if (loggedIn) {
      return redirect("/");
    }
    return loggedIn;
  },
});

export const initialQuery = () => ({
  queryKey: ["user"],
  queryFn: async () => {
    const localToken = getToken();
    const user = await initial(localToken);
    if (!user) {
      return redirect("/");
    }
    return user;
  },
});

export const getUsersQuery = () => ({
  queryKey: ["users"],
  queryFn: async () => {
    const users = await getUsers();
    // if (!users) {
    //   return redirect("/");
    // }
    return users;
  },
});

export const getRolesQuery = () => ({
  queryKey: ["roles"],
  queryFn: async () => {
    const roles = await getRoles();
    // if (!users) {
    //   return redirect("/");
    // }
    return roles;
  },
});

export const getMenusByRoleQuery = () => ({
  queryKey: ["menus"],
  queryFn: async () => {
    const menus = await getMenusByRole();
    // if (!users) {
    //   return redirect("/");
    // }
    return menus;
  },
});
