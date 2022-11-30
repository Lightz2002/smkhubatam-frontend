import React from "react";
import { Grid } from "../styles/UI";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import { theme } from "../../utilities/constant";
import { getToken } from "../../utilities/security";
import { Outlet, redirect } from "react-router";
import { getUser, initial } from "../../api/userApi";
import { useQuery } from "react-query";

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
      if (res.status === 401) return redirect("/");
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
      name: "user",
      path: "/user",
    },
    {
      id: 2,
      name: "journal",
      path: "/journal",
    },
  ];

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return "Error";
  }

  return (
    <Grid column="15% 85%">
      <DashboardNavbar user={user.data} className="navbar"></DashboardNavbar>
      <DashboardSidebar
        user={user.data}
        menus={menus}
        className="sidebar"
      ></DashboardSidebar>
      <div>
        <Outlet />
      </div>
    </Grid>
  );
};

export default Dashboard;
