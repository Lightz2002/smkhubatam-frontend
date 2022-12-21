import React from "react";
import { useQuery } from "react-query";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import { Outlet, redirect } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Toolbar } from "@mui/material";
import { initialQuery } from "../../api/queries";
import { setToken } from "../../utilities/security";
import { logout } from "../../api/userApi";

export const action =
  (queryClient) =>
  async ({ request, params }) => {
    try {
      queryClient.invalidateQueries(["isAuthenticated"]);
      const res = await logout();
      console.log(res);
      // if credentials are correct
      setToken("");
      return redirect("/");
    } catch (e) {
      console.warn(e);
    }
  };

export const loader =
  (queryClient) =>
  async ({ request, params }) => {
    try {
      const query = initialQuery();
      return (
        queryClient.getQueryData(query) ?? (await queryClient.fetchQuery(query))
      );
    } catch (e) {
      const res = JSON.parse(JSON.stringify(e.response));
      if (res.status === 401) return redirect("/login");
    }
  };

const Dashboard = () => {
  const { data: user, isLoading, isError } = useQuery(initialQuery());
  const menus = [
    {
      id: 1,
      name: "User",
      path: "/users",
      icon: "FaBeer",
    },
    {
      id: 2,
      name: "Journal",
      path: "/journal",
      icon: "FaBeer",
    },
  ];
  // const { data: menus } = useQuery(getMenusByRoleQuery());

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return "Error";
  }

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <CssBaseline />
      <DashboardNavbar user={user.data} logout={action} />
      <DashboardSidebar user={user.data} menus={menus} />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "#f7f8f8", p: 3, position: "relative" }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
