import React, { useState } from "react";
// import { Form } from "react-router-dom";
import { useQueryClient, useQuery, useMutation } from "react-query";
import FormGroup from "../Global/FormGroup";
import { StyledForm } from "../styles/UI";
import { authenticate, getUser } from "../../api/userApi";

const LoginForm = ({
  forms,
  children,
  submitHandler,
  setFormValue,
  method = "post",
  action,
}) => {
  // Access the client
  // const queryClient = useQueryClient();

  // // Mutations
  // const authenticateMutation = useMutation(authenticate, {
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries("authenticate");
  //   },
  // });

  const inputChangeHandler = (input) => {
    setFormValue(input);
  };

  return (
    <StyledForm method={method} action={action}>
      {forms.map((form) => (
        <FormGroup
          key={form.name}
          name={form.name}
          placeholder={form.placeholder}
          value={form.value}
          label={form.label}
          setFormValue={inputChangeHandler}
        />
      ))}
      {children}
    </StyledForm>
  );
};

export default LoginForm;
