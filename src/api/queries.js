import { getUsers, getRoles, initial, getMenusByRole } from "./userApi";
import { redirect } from "react-router-dom";

export const initialQuery = () => ({
  queryKey: ["user"],
  queryFn: async () => {
    const user = await initial();
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
