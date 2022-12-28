import { Typography, Avatar, Button } from "@mui/material";
import { Form } from "react-router-dom";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;

const DashboardNavbar = ({ user, logout }) => {
  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar>
        <Avatar
          src="https://images.ctfassets.net/hrltx12pl8hq/go6z2gBaTMDvTrtoOipOw/3b9d21ff7003ca392a2daeb569d629fc/shutterstock_1802211250.jpg?fit=fill&w=175&h=175&fm=webp"
          sx={{
            borderRadius: "50%",
            mr: 2,
            width: 50,
            height: 50,
          }}
        />
        <Typography variant="h6" noWrap component="div">
          <Typography>Welcome Back, {user.Name}</Typography>
          <Typography variant="body1">{user.Role.Name}</Typography>
        </Typography>
        <Form method="post" action={logout} className="logout-form">
          <Button
            type="submit"
            sx={{
              color: "white",
            }}
          >
            Logout
          </Button>
        </Form>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNavbar;
