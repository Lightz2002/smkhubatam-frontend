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

export const logout = async () => {
    try {
        const response = await baseApi.post("/logout", {
            headers: {
                Authorization: getToken(),
            },
        });
        return response;
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

/* User */
export const getUser = async (id) => {
    try {
        const response = await baseApi.get(`/users/${id}`, {
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

export const updateUser = async (user, studentId) => {
    try {
        const response = await baseApi.put(
            `/users/${studentId}`,
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
        throw e;
    }
};

/* Role */
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
        const response = await baseApi.get(`/roles/rolemenu?role=${role}`, {
            headers: {
                Authorization: getToken(),
            },
        });
        return response;
    } catch (e) {
        throw e;
    }
};

/* Location */
export const getLocations = async () => {
    try {
        const response = await baseApi.get("/locations", {
            headers: {
                Authorization: getToken(),
            },
        });
        return response;
    } catch (e) {
        throw e;
    }
};

export const createLocation = async (location) => {
    try {
        const response = await baseApi.post(
            "/locations",
            {
                ...location,
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

/* Internship */
/* Journal */
