import { getUsers, getUser, getRoles, initial, getMenusByRole, getLocations } from "./userApi";
import { redirect } from "react-router-dom";

export const initialQuery = () => ({
    queryKey: ["user"],
    queryFn: async () => {
        const user = await initial();
        return user;
    },
});

export const getUsersQuery = () => ({
    queryKey: ["users"],
    queryFn: async () => {
        const users = await getUsers();
        return users;
    },
});

export const getUserQuery = (userId, callback) => ({
    queryKey: ["user", userId],
    queryFn: async () => {
        const user = await getUser(userId);
        return user;
    },
    enabled: !!userId,
    // onSuccess: () => {
    //   callback
    // }
});

export const getRolesQuery = () => ({
    queryKey: ["roles"],
    queryFn: async () => {
        const roles = await getRoles();
        return roles;
    },
});

export const getMenusByRoleQuery = (roleId) => ({
    queryKey: ["menus", roleId],
    queryFn: async () => {
        const menus = await getMenusByRole(roleId);
        return menus;
    },
    enabled: !!roleId,
});

/* Location */
export const getLocationsQuery = () => ({
    queryKey: ["locations"],
    queryFn: async () => {
        const locations = await getLocations();
        return locations;
    },
});

export const getLocationQuery = (locationId) => ({
    queryKey: ["location", locationId],
    queryFn: async () => {
        console.log(locationId);
        const user = await getUser(locationId);
        return user;
    },
    enabled: !!locationId,
});
