import React from "react";
import { Typography, Grid, Button } from "@mui/material";
import FormGroup from "../Global/FormGroup";
import { Form } from "react-router-dom";

const UserInputForm = (props) => {
  const { userForms, userId, inputChangeHandler } = props;
  return (
    <Form
      className="modal-form"
      method={userId ? "PUT" : "POST"}
      action={userId ? `/student/${userId}` : "/student"}
    >
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        sx={{
          mb: 2,
        }}
      >
        {userId ? "Edit User" : "Create User"}
      </Typography>
      <Grid container>
        {userForms.map((form) => (
          <Grid key={form.name} xs={form.column}>
            <FormGroup form={form} inputChangeHandler={inputChangeHandler} />
          </Grid>
        ))}
      </Grid>
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
