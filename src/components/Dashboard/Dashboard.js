import React from "react";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import { Outlet, redirect, useLoaderData } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Toolbar } from "@mui/material";
import { initialQuery, getMenusByRoleQuery } from "../../api/queries";
import { setToken } from "../../utilities/security";

export const action =
    (queryClient) =>
    async ({ request, params }) => {
        try {
            // if credentials are correct
            localStorage.setItem("token", "");
            setToken("");
            return redirect("/login");
        } catch (e) {
            console.warn(e);
        }
    };

export const loader =
    (queryClient) =>
    async ({ request, params }) => {
        try {
            const query = initialQuery();
            const user = queryClient.getQueryData(query) ?? (await queryClient.fetchQuery(query));
            const roleId = user?.data.Role?.Id;
            const query2 = getMenusByRoleQuery(roleId);

            const menus =
                queryClient.getQueryData(query2) ?? (await queryClient.fetchQuery(query2));
            return { user: user, menus: menus };
        } catch (e) {
            const res = JSON.parse(JSON.stringify(e.response));
            if (!res.ok) return redirect("/login");
        }
    };

const Dashboard = () => {
    const { user, menus } = useLoaderData();
    // const handleLogout = () => {
    //   const logoutValue = "";
    //   localStorage.setItem("token", logoutValue);
    //   setToken(logoutValue);
    // }

    for (let menu of menus.data) {
        menu.path = "/" + menu.Name.toLowerCase();
    }

    return (
        <Box sx={{ display: "flex", height: "100%" }}>
            <CssBaseline />
            <DashboardNavbar user={user.data} logout='/' />
            <DashboardSidebar user={user.data} menus={menus.data} />
            <Box
                component='main'
                sx={{ flexGrow: 1, bgcolor: "#f7f8f8", p: 3, position: "relative" }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
};

export default Dashboard;
