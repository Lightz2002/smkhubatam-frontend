import React from "react";
import { List } from "@mui/material";
import DashboardSidebarListItem from "./DashboardSidebarListItem";

const DashboardSidebarList = ({ menus }) => {
  return (
    <List>
      {menus.map((menu) => (
        <DashboardSidebarListItem key={menu.id} menu={menu} />
      ))}
    </List>
  );
};

export default DashboardSidebarList;
