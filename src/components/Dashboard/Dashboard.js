import React from "react";
import { useQuery } from "react-query";
import { theme } from "../../utilities/constant";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import { getToken } from "../../utilities/security";
import { Outlet, redirect } from "react-router-dom";
import { getUser, initial } from "../../api/userApi";
import { Box } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

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

// export const action =
//   (queryClient) =>
//   async ({ request, params }) => {
//     try {
//       const formData = await request.formData();
//       const credentials = Object.fromEntries(formData);
//       queryClient.invalidateQueries(["isAuthenticated"]);
//       const res = await login(credentials);
//       if (res.statusCode === 401) return;

//       // if credentials are correct
//       setToken(res.data.access_token);
//       localStorage.setItem("access_token", token);
//       return redirect("/dashboard");
//     } catch (e) {
//       console.warn(e);
//     }
//   };

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
  const {
    data: user,
    isLoading,
    isSuccess,
    isError,
  } = useQuery(initialQuery());

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

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return "Error";
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <DashboardNavbar user={user.data} />
      <DashboardSidebar user={user.data} menus={menus} />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
