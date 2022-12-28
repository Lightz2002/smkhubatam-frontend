import {
  Autocomplete,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Box,
} from "@mui/material";
import React from "react";

const FormGroup = (props) => {
  const { form, inputChangeHandler } = props;
  let result = "";

  switch (form.type) {
    case "autocomplete":
      result = (
        <Autocomplete
          autoHighlight
          id="disable-clearable"
          disableClearable
          options={form.options}
          getOptionLabel={(option) => option.label || ""}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderOption={(props, option) => (
            <Box component="li" {...props} value={option.id}>
              {option.label || ""}
            </Box>
          )}
          renderInput={(params) => <TextField {...params} name={form.name} />}
          onChange={inputChangeHandler}
          value={form.selectedValue}
        />
      );
      break;

    case "radio":
      result = (
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            {form.name}
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name={form.name}
            value={form.selectedValue}
            onChange={inputChangeHandler}
          >
            {form.options.map((radio) => (
              <FormControlLabel
                key={radio.value}
                value={radio.value}
                label={radio.label}
                control={<Radio />}
                checked={form.selectedValue === radio.value ? "checked" : ""}
              />
            ))}
          </RadioGroup>
        </FormControl>
      );
      break;

    case "text":
    case "number":
    case "password":
    default:
      result = (
        <TextField
          type={form.type}
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
      );
      break;
  }

  return result;
};

export default FormGroup;
