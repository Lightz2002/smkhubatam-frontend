import { Avatar, Button, Grid, Drawer, Toolbar, Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import DashboardSidebarList from "./DashboardSidebarList";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { FiBook } from "react-icons/fi";

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
