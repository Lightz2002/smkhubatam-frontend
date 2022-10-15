import React from "react";
import { Flex, Container, Header, Title, Button } from "../styles/UI";
import LoginForm from "./LoginForm";

const Login = () => {
  const forms = [
    {
      name: "Username",
      label: "Username",
      type: "text",
    },
    {
      name: "Password",
      label: "Password",
      type: "password",
    },
  ];

  return (
    <Flex
      width="50%"
      height="70%"
      background="black"
      borderRadius="6px"
      boxShadow="true"
    >
      <Flex background="#aaa" width="30%">
        SMK HU BATAM
      </Flex>
      <Container background="#fff" width="70%" padding="1.5rem 2rem">
        <Title margin="0 0 2rem">Log In</Title>
        <LoginForm forms={forms}></LoginForm>
        <Button margin="1rem 0 0">Login</Button>
      </Container>
    </Flex>
  );
};

export default Login;
