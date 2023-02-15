import React from "react";
import {
    Typography,
    Grid,
    Button,
    TextField,
    FormControl,
    FormLabel,
    FormControlLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
// import FormGroup from "../Global/FormGroup";
import { Form } from "react-router-dom";

const UserInputForm = (props) => {
    const { userForms, userId, handleInputChange } = props;
    return (
        <Form
            className='modal-form'
            method={userId ? "PUT" : "POST"}
            action={userId ? `/student/${userId}` : "/student"}
        >
            <Typography
                id='modal-modal-title'
                variant='h6'
                component='h2'
                sx={{
                    mb: 2,
                }}
            >
                {userId ? "Edit User" : "Create User"}
            </Typography>
            <Grid container>
                <Grid item xs='2'>
                    <TextField
                        id='Name'
                        label='Name'
                        name='Name'
                        variant='outlined'
                        value={userForms.Name}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs='2'>
                    <TextField
                        id='Username'
                        label='Username'
                        name='Username'
                        variant='outlined'
                        value={userForms.Username}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs='2'>
                    <TextField
                        id='Password'
                        label='Password'
                        name='Password'
                        variant='outlined'
                        value={userForms.Password}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs='2'>
                    <TextField
                        id='Age'
                        label='Age'
                        name='Age'
                        type='number'
                        variant='outlined'
                        value={userForms.Age}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs='2'>
                    <TextField
                        id='YearEntered'
                        label='YearEntered'
                        name='YearEntered'
                        type='number'
                        variant='outlined'
                        value={userForms.YearEntered}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs='2'>
                    <FormControl>
                        <FormLabel id='demo-controlled-radio-buttons-group'>Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby='demo-controlled-radio-buttons-group'
                            name='controlled-radio-buttons-group'
                            value={userForms.Gender}
                            onChange={handleInputChange}
                        >
                            <FormControlLabel value='female' control={<Radio />} label='Female' />
                            <FormControlLabel value='male' control={<Radio />} label='Male' />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
            <Button
                type='submit'
                variant='contained'
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
