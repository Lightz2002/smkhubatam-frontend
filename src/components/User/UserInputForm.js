import React from "react";
import { Grid, Typography, Box, Modal, TextField, Button } from "@mui/material";
import FormGroup from "../Global/FormGroup";
import { Form } from "react-router-dom";

const UserInputForm = (props) => {
  const { userForms, inputChangeHandler } = props;
  return (
    <Form className="modal-form" method="post" action="/users">
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        sx={{
          mb: 2,
        }}
      >
        Create User
      </Typography>
      <Box>
        {userForms.map((form) => (
          <FormGroup
            key={form.name}
            form={form}
            inputChangeHandler={inputChangeHandler}
          />
        ))}
      </Box>
      <Button
        type="submit"
        variant="contained"
        sx={{
          display: "block",
          mt: 2,
          width: "100%",
        }}
      >
        Save
      </Button>
    </Form>
  );
};

export default UserInputForm;
