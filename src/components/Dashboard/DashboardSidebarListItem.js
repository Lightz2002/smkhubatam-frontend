import React from "react";
import { FiBook } from "react-icons/fi";
import {
  Link,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const DashboardSidebarListItem = ({ menu }) => {
  return (
    <NavLink
      to={menu.path}
      className={({ isActive }) =>
        isActive ? "active-navbar" : "bg-red-500 font-thin"
      }
    >
      <ListItem key={menu.key} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {menu.key % 2 === 0 ? <FiBook /> : <FiBook />}
          </ListItemIcon>
          <ListItemText primary={menu.name} />
        </ListItemButton>
      </ListItem>
    </NavLink>
  );
};

export default DashboardSidebarListItem;
