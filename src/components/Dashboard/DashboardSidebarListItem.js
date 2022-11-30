import React from "react";
import { FiBook } from "react-icons/fi";
import {
  Link,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";

const DashboardSidebarListItem = ({ menu }) => {
  const useStyles = makeStyles({
    active: {
      backgroundColor: "yellow",
      color: "black",
    },
  });

  const classes = useStyles();

  return (
    <NavLink
      to={menu.path}
      className={({ isActive, isPending }) =>
        isActive ? "active" : isPending ? "pending" : ""
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
