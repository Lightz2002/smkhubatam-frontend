import React, { useState } from "react";
import { Form } from "react-router-dom";
import { useQueryClient, useQuery, useMutation } from "react-query";
import { Button, TextField } from "@mui/material";

const LoginForm = ({
  forms,
  children,
  submitHandler,
  setFormValue,
  method = "post",
  action,
}) => {
  const inputChangeHandler = (input) => {
    setFormValue(input);
  };

  return (
    <Form method={method} action={action}>
      {forms.map((form) => (
        <TextField
          // id={form.name}
          key={form.name}
          name={form.name}
          placeholder={form.placeholder}
          value={form.value}
          label={form.label}
          onChange={inputChangeHandler}
          sx={{
            mb: 2,
            mr: 2,
          }}
        />
      ))}
      <Button
        type="submit"
        sx={{
          display: "block",
        }}
      >
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
