import React from "react";
import FormGroup from "../Global/FormGroup";
import { Form } from "../styles/UI";

const LoginForm = ({ forms }) => {
  return (
    <Form>
      {forms.map((form) => (
        <FormGroup key={form.name} value={form.value} label={form.label} />
      ))}
    </Form>
  );
};

export default LoginForm;
