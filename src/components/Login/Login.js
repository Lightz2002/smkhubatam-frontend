import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { redirect } from "react-router-dom";
import { login, initial } from "../../api/userApi";
import { token, setToken, getToken } from "../../utilities/security";
import { Flex, Container, Header, Title, Button } from "../styles/UI";
import LoginForm from "./LoginForm";

export const authenticateQuery = () => ({
  queryKey: ["isAuthenticated"],
  queryFn: async () => {
    const localToken = getToken();
    const loggedIn = await initial(localToken);
    if (loggedIn) {
      return redirect("/dashboard");
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
      localStorage.setItem("token", token);
      return redirect("/dashboard");
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
        if (form.name === input.name) return input;
        else return form;
      })
    );
  };

  return (
    <Flex
      width="50%"
      height="70%"
      background="black"
      borderRadius="6px"
      boxShadow={true}
      center={true}
    >
      <Flex background="#aaa" width="30%">
        SMK HU BATAM
      </Flex>
      <Container background="#fff" width="70%" padding="1.5rem 2rem">
        <Title margin="0 0 2rem">Log In</Title>
        <LoginForm forms={forms} setFormValue={formHandler} action="/">
          <Button margin="1rem 0 0">Login</Button>
        </LoginForm>
      </Container>
    </Flex>
  );
};

export default Login;
