import AddIcon from "@mui/icons-material/Add";
import { Grid, Typography, Box, Fab } from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { InputChangeHandler } from "../../utilities/helper";
import UserInputModal from "./UserInputModal";
import { createUser, updateUser, getUser } from "../../api/userApi";
import UserListItem from "./UserListItem";
import { getUsersQuery, getUserQuery, getRolesQuery } from "../../api/queries";
import { useActionData } from "react-router";

export const action =
    (queryClient) =>
    async ({ request, params }) => {
        try {
            const formData = await request.formData();
            const inputs = Object.fromEntries(formData);
            queryClient.invalidateQueries(["roles"]);

            let res = null;
            if (!!params.studentId) {
                res = await updateUser(inputs, params.studentId);
            } else {
                res = await createUser(inputs);
            }
            if (res.statusCode === 401) return;
            return res;
        } catch (e) {
            console.warn(e);
        }
    };

export const loader =
    (queryClient) =>
    async ({ request, params }) => {
        try {
            const query = getUsersQuery();
            return queryClient.getQueryData(query) ?? (await queryClient.fetchQuery(query));
        } catch (e) {
            // const res = JSON.parse(JSON.stringify(e.response));
            // if (res.status === 401) return redirect("/login");
        }
    };

const UserList = () => {
    const [userId, setUserId] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [modalIsEdit, setModalIsEdit] = useState(false);

    // const {
    //   data: user,
    //   error,
    //   isLoading: userIsLoading,
    //   status,
    // } = useQuery(getUserQuery(userId, showUser));

    const res = useActionData();
    const {
        data: users,
        isLoading,
        isError,
        refetch,
    } = useQuery(getUsersQuery(), {
        staleTime: 0,
        cacheTime: 0,
        refetchInterval: 0,
    });

    const { data: roles } = useQuery(getRolesQuery());

    let role = roles?.data ?? [];

    const defaultForm = {
        Username: "",
        Name: "",
        Password: "",
        Gender: "",
        Age: "",
        YearEntered: "",
        Role: "",
    };
    const [userForms, setUserForms] = useState(defaultForm);

    useEffect(() => {
        if (res && res.status === 201) {
            setOpenModal(false);
            setModalIsEdit(false);
            refetch();
        }
    }, [res, refetch]);

    const toggleModal = (modal, forms = null, userId = null) => {
        setOpenModal((prevState) => !prevState);
        console.log(modal);
        setUserId(userId);
        if (role) {
            console.log(userForms);
            // if (forms === null) {
            //     role = role.map((item) => {
            //         return {
            //             id: item.Id,
            //             label: item.Code,
            //         };
            //     });
            //     setUserForms(() => {
            //         return defaultForm.map((prevForm) => {
            //             if (prevForm.name !== "Role") return prevForm;
            //             return {
            //                 ...prevForm,
            //                 selectedValue: role[0],
            //                 options: role,
            //             };
            //         });
            //     });
        } else {
            return forms;
        }
    };
    const userInputChangeHandler = (input) => InputChangeHandler(input, userForms, setUserForms);

    function showUser(e, id) {
        const user = users?.data.filter((user) => user.Id === id)[0];
        setUserForms((prevForms) => {
            const forms = prevForms
                .map((prevForm) => {
                    switch (prevForm.type) {
                        case "autocomplete":
                            const formattedRole = role.map((item) => {
                                return {
                                    id: item.Id,
                                    label: item.Code,
                                };
                            });

                            return {
                                ...prevForm,
                                selectedValue: {
                                    id: user.Role.Id,
                                    label: user.Role.Code,
                                },
                                options: formattedRole,
                            };

                        case "text":
                        default:
                            return {
                                ...prevForm,
                                value: user[prevForm.name],
                            };
                    }
                })
                .filter((curForm) => curForm.name !== "Password");

            return forms;
        });
        setTimeout(toggleModal(openModal, userForms, id), 1000);
    }

    if (isLoading) {
        return "Loading...";
    }

    if (isError) {
        return "Somehing went wrong, Error";
    }

    if (openModal) {
        return (
            <UserInputModal
                userForms={userForms}
                openModal={openModal}
                userId={userId}
                toggleModal={toggleModal}
                handleInputChange={userInputChangeHandler}
            />
        );
    }

    return (
        <Box
            sx={{
                position: "relative",
                overflow: "auto",
            }}
        >
            <Typography
                variant='h4'
                sx={{
                    mb: 4,
                    overflow: "auto",
                    position: "relative",
                }}
            >
                User
            </Typography>
            <Grid container spacing={2}>
                {users.data.map((user) => (
                    <UserListItem key={user.Id} user={user} showUser={showUser} />
                ))}
            </Grid>
            <Fab
                color='primary'
                aria-label='add'
                sx={{
                    position: "absolute",
                    bottom: 20,
                    right: 20,
                }}
                onClick={() => toggleModal(openModal)}
            >
                <AddIcon />
            </Fab>
        </Box>
    );
};

export default UserList;
