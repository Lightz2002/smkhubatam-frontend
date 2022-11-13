import React from "react";
import { Grid } from "../styles/UI";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

const Dashboard = ({ children }) => {
  return (
    <Grid column="25% 75%">
      <DashboardNavbar className="navbar"></DashboardNavbar>
      <DashboardSidebar className="sidebar"></DashboardSidebar>
      {children}
    </Grid>
  );
};

export default Dashboard;
