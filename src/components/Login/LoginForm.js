import React, { useState } from "react";
import { Form } from "react-router-dom";
import { useQueryClient, useQuery, useMutation } from "react-query";
import { Button, TextField } from "@mui/material";

const LoginForm = ({
    credentials,
    handlePasswordChange,
    handleUsernameChange,
    method = "post",
    action,
    handleSubmit,
}) => {
    return (
        <Form method={method} action={action} onSubmit={handleSubmit}>
            <TextField
                id='Username'
                name='Username'
                label='Username'
                variant='outlined'
                value={credentials.Username}
                onChange={handleUsernameChange}
                margin='normal'
            />
            <TextField
                id='Password'
                name='Password'
                label='Password'
                type='password'
                variant='outlined'
                value={credentials.Password}
                onChange={handlePasswordChange}
                margin='normal'
            />

            <Button
                type='submit'
                variant='contained'
                sx={{
                    display: "block",
                    mt: 4,
                }}
            >
                Login
            </Button>
        </Form>
    );
};

export default LoginForm;
