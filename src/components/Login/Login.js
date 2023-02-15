import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { redirect } from "react-router-dom";
import { login } from "../../api/userApi";
import { token, setToken } from "../../utilities/security";
import LoginForm from "./LoginForm";
import { Typography } from "@mui/material";
import { initialQuery } from "../../api/queries";
import { useTheme } from "@emotion/react";

export const action =
  (queryClient) =>
  async ({ request, params }) => {
    try {
      const formData = await request.formData();
      const credentials = Object.fromEntries(formData);
      queryClient.invalidateQueries(["user"]);
      const res = await login(credentials);
      if (res.statusCode === 401) return;

      // if credentials are correct
      setToken(res.data.access_token);
      localStorage.setItem("token", token);
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
      return e;
    }
  };

const Login = () => {
  const theme = useTheme();
  const [user, setUser] = useState({
    Username: "",
    Password: "",
  });

  const handleUsernameChange = (e) => {
    setUser((user) => {
      return {
        ...user,
        Username: e.target.value,
      };
    });
  };
  const handlePasswordChange = (e) => {
    setUser((user) => {
      return {
        ...user,
        Password: e.target.value,
      };
    });
  };

  const handleSubmit = (input) => {
    setUser({
      Username: "",
      Password: "",
    });
  };

  return (
    <Box
      sx={{
        position: "relative",
        transform: "translateY(-50%)",
        top: "50%",
        height: "70%",
        width: "60%",
        boxShadow: 1,
        padding: 0,
        margin: "0 auto",
      }}
    >
      <Grid
        container
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <Grid
          item
          xs={3}
          alignItems="center"
          sx={{
            background: theme.palette.primary.main,
            height: "100%",
          }}
        >
          <Typography sx={{ color: "white", textAlign: "center" }}>
            SMK HU BATAM
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            padding: "2rem",
          }}
        >
          <Typography variant="h5" sx={{ mb: 5 }}>
            Login
          </Typography>
          <LoginForm
            credentials={user}
            handleUsernameChange={handleUsernameChange}
            handlePasswordChange={handlePasswordChange}
            handleSubmit={handleSubmit}
            action="/login"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
