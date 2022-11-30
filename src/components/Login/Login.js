import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { redirect } from "react-router-dom";
import { login, initial } from "../../api/userApi";
import { token, setToken, getToken } from "../../utilities/security";
import LoginForm from "./LoginForm";
import { Typography } from "@mui/material";

export const authenticateQuery = () => ({
  queryKey: ["isAuthenticated"],
  queryFn: async () => {
    const localToken = getToken();
    const loggedIn = await initial(localToken);
    if (loggedIn) {
      return redirect("/");
    }
    return loggedIn;
  },
});

export const action =
  (queryClient) =>
  async ({ request, params }) => {
    try {
      const formData = await request.formData();
      const credentials = Object.fromEntries(formData);
      queryClient.invalidateQueries(["isAuthenticated"]);
      const res = await login(credentials);
      if (res.statusCode === 401) return;

      // if credentials are correct
      setToken(res.data.access_token);
      console.log("token");
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
      const query = authenticateQuery();
      return (
        queryClient.getQueryData(query) ?? (await queryClient.fetchQuery(query))
      );
    } catch (e) {
      return e;
    }
  };

const Login = () => {
  const [forms, setForms] = useState([
    {
      name: "Username",
      label: "Username",
      type: "text",
      value: "",
    },
    {
      name: "Password",
      label: "Password",
      type: "password",
      value: "",
    },
  ]);

  // const isAuthenticated = useLoaderData();
  // const mutation = useMutation((user) => authenticate(user));
  // if (isAuthenticated) {
  //   return redirect("/dashboard");
  // }

  // const {
  //   isLoading,
  //   isError,
  //   data: authenticated,
  //   error,
  // } = useQuery("authenticated", authenticate);

  // if (mutation.isSuccess) {
  //   return redirect("/dashboard");
  // }

  // const loginHandler = async (e) => {
  //   /*
  //   objectives: submit form, check if authenticated, redirect to dashboard
  //   steps:
  //   1. create state and handler for form submitting
  //   2. if not authenticated,
  //     show a modal with error credentials error
  //   3. else
  //     save the user state
  //     save the login token in localstorage
  //     redirect to dashboard
  //   */
  //   e.preventDefault();
  //   let credentials = {};
  //   credentials.Username = forms[0].value;
  //   credentials.Password = forms[1].value;
  //   // setUser(credentials);
  //   // mutation.mutate(credentials);
  // };

  const formHandler = (input) => {
    setForms(
      forms.map((form) => {
        if (form.name === input.target.name)
          return {
            ...form,
            value: input.target.value,
          };
        else return form;
      })
    );
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
            background: "#aaa",
            height: "100%",
          }}
        >
          <Typography>SMK HU BATAM</Typography>
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
          <LoginForm forms={forms} setFormValue={formHandler} action="/login" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
