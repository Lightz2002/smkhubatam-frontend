import { Drawer, Toolbar, Divider } from "@mui/material";
import React from "react";
import DashboardSidebarList from "./DashboardSidebarList";

const drawerWidth = 240;

const DashboardSidebar = ({ menus, className }) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <DashboardSidebarList menus={menus} />
      <Divider />
    </Drawer>
  );
};

export default DashboardSidebar;
