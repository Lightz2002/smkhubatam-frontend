import React, { forwardRef } from "react";
import {
  Autocomplete,
  Button,
  FormControl,
  FormLabel,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
// import FormGroup from "../Global/FormGroup";
import { Form } from "react-router-dom";

const UserInputForm = forwardRef((props, ref) => {
  const { userForms, userId, inputChangeHandler, role } = props;

  return (
    <Form
      className="modal-form"
      method={userId ? "PUT" : "POST"}
      action={userId ? `/student/${userId}` : "/student"}
      ref={ref}
    >
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        sx={{ mb: 3 }}
      >
        {userId ? "Edit User" : "Create User"}
      </Typography>
      <Grid container spacing={2} sx={{ width: "100%" }}>
        <Grid item xs={12}>
          <TextField
            id="Name"
            label="Name"
            name="Name"
            variant="outlined"
            value={userForms.Name}
            onChange={inputChangeHandler}
            sx={{ width: "100%", height: "50px" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Username"
            label="Username"
            name="Username"
            variant="outlined"
            value={userForms.Username}
            onChange={inputChangeHandler}
            sx={{ width: "100%", height: "50px" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Password"
            label="Password"
            name="Password"
            variant="outlined"
            value={userForms.Password}
            onChange={inputChangeHandler}
            sx={{ width: "100%", height: "50px" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="Age"
            label="Age"
            name="Age"
            type="number"
            variant="outlined"
            value={userForms.Age}
            onChange={(e) => inputChangeHandler(e, "number")}
            sx={{ width: "100%", height: "50px" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="YearEntered"
            label="YearEntered"
            name="YearEntered"
            type="number"
            variant="outlined"
            value={userForms.YearEntered}
            onChange={inputChangeHandler}
            sx={{ width: "100%", height: "50px" }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ width: "100%" }}>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Gender
            </FormLabel>
            <RadioGroup
              aria-labelledby="Gender"
              name="Gender"
              value={userForms.Gender}
              onChange={inputChangeHandler}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            id="role-combo"
            idval={userForms.Role}
            // name="Role"
            // inputRef={myAutocompleteRef}
            value={
              role.find(
                (option) => option.Id === (userForms.Role ?? role[0].Id)
              ) || null
            }
            onChange={(e, newValue) => {
              inputChangeHandler(e, "role", newValue);
            }}
            options={role}
            sx={{ width: "100%" }}
            getOptionLabel={(option) => option.Name ?? null}
            renderInput={(params) => (
              <TextField {...params} id="roleInput" label="Role" name="Role" />
            )}
          />
        </Grid>
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
});

export default UserInputForm;
