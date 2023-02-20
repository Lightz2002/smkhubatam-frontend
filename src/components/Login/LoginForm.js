import React from "react";
import { Form } from "react-router-dom";
import { Button, TextField } from "@mui/material";

const LoginForm = ({
  credentials,
  handlePasswordChange,
  handleUsernameChange,
  method = "post",
  action,
  errors,
}) => {
  return (
    <Form method={method} action={action}>
      <TextField
        required
        id="Username"
        name="Username"
        label="Username"
        variant="outlined"
        value={credentials.Username}
        onChange={handleUsernameChange}
        margin="normal"
        sx={{ width: "100%" }}
      />
      <TextField
        required
        id="Password"
        name="Password"
        label="Password"
        type="password"
        variant="outlined"
        value={credentials.Password}
        onChange={handlePasswordChange}
        margin="normal"
        sx={{ width: "100%" }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          display: "block",
          mt: 2,
        }}
      >
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
