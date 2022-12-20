import AddIcon from "@mui/icons-material/Add";
import {
  Grid,
  Typography,
  Box,
  Fab,
  Modal,
  TextField,
  Button,
} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { InputChangeHandler } from "../../utilities/helper";
import UserInputModal from "./UserInputModal";
import { createUser } from "../../api/userApi";
import UserListItem from "./UserListItem";
import { getUsersQuery, getRolesQuery } from "../../api/queries";

export const action =
  (queryClient) =>
  async ({ request, params }) => {
    try {
      const formData = await request.formData();
      const inputs = Object.fromEntries(formData);
      // queryClient.invalidateQueries(["roles"]);
      const res = await createUser(inputs);
      if (res.statusCode === 401) return;
      return res;
      // if credentials are correct
    } catch (e) {
      console.warn(e);
    }
  };

export const loader =
  (queryClient) =>
  async ({ request, params }) => {
    try {
      const query = getUsersQuery();
      return (
        queryClient.getQueryData(query) ?? (await queryClient.fetchQuery(query))
      );
    } catch (e) {
      // const res = JSON.parse(JSON.stringify(e.response));
      // if (res.status === 401) return redirect("/login");
    }
  };

const UserList = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    refetch,
  } = useQuery(getUsersQuery(), {
    staleTime: 0,
    cacheTime: 0,
    refetchInterval: 0,
  });

  const { data: roles } = useQuery(getRolesQuery());

  let role = roles?.data ?? [];

  const [userForms, setUserForms] = useState([
    {
      name: "Name",
      label: "Name",
      type: "text",
      value: "",
      validation: "required",
    },
    {
      name: "Username",
      label: "Username",
      type: "text",
      value: "",
      validation: "required",
    },
    {
      name: "Password",
      label: "Password",
      type: "password",
      value: "",
      validation: "required",
    },
    {
      name: "Gender",
      label: "Gender",
      type: "radio",
      selectedValue: "Female",
      validation: "required",
      options: [
        {
          value: "Male",
          label: "Male",
        },
        {
          value: "Female",
          label: "Female",
        },
        {
          value: "Other",
          label: "Other",
        },
      ],
    },
    {
      name: "Age",
      label: "Age",
      type: "number",
      value: "",
      validation: "required",
    },
    {
      name: "YearEntered",
      label: "YearEntered",
      type: "number",
      value: "",
    },
    {
      name: "Role",
      label: "Role",
      type: "autocomplete",
      selectedValue: role[0],
      options: role,
    },
  ]);

  const [openModal, setOpenModal] = useState(false);

  const toggleModal = (modal) => {
    setOpenModal((prevState) => !modal);
    if (role) {
      role = role.map((item) => {
        return {
          id: item.Id,
          label: item.Code,
        };
      });
      setUserForms((prevForms) => {
        return prevForms.map((prevForm) => {
          if (prevForm.name !== "Role") return prevForm;
          return {
            ...prevForm,
            selectedValue: role[0],
            options: role,
          };
        });
      });
    }
  };

  const userInputChangeHandler = (input) =>
    InputChangeHandler(input, userForms, setUserForms);

  const showUser = (e, id) => {};

  if (isLoading) {
    return "Loading...";
  }

  if (openModal) {
    return (
      <UserInputModal
        userForms={userForms}
        openModal={openModal}
        toggleModal={toggleModal}
        inputChangeHandler={userInputChangeHandler}
      />
    );
  }

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          position: "relative",
        }}
      >
        User
      </Typography>
      <Grid container spacing={2}>
        {users.data.map((user) => (
          <UserListItem key={user.id} user={user} showUser={showUser} />
        ))}
      </Grid>
      <Fab
        color="primary"
        aria-label="add"
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
