import AddIcon from "@mui/icons-material/Add";
import { Grid, Typography, Box, Fab } from "@mui/material";
import * as React from "react";
import { useState, useEffect, useReducer } from "react";
import { useQuery } from "react-query";
import UserInputModal from "./UserInputModal";
import { createUser, updateUser } from "../../api/userApi";
import UserListItem from "./UserListItem";
import { getUsersQuery, getRolesQuery } from "../../api/queries";
import { useActionData, useLoaderData } from "react-router";

export const action =
  (queryClient) =>
  async ({ request, params }) => {
    try {
      const formData = await request.formData();
      const inputs = Object.fromEntries(formData);
      const roleIdVal = document
        .querySelector("#role-combo")
        .getAttribute("idval");
      inputs.Role = roleIdVal;
      console.log(inputs);
      // console.log(inputs);
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
      const query2 = getRolesQuery();

      return [
        queryClient.getQueryData(query) ??
          (await queryClient.fetchQuery(query)),
        queryClient.getQueryData(query2) ??
          (await queryClient.fetchQuery(query2)),
      ];
    } catch (e) {
      console.log(e);
      // const res = JSON.parse(JSON.stringify(e.response));
      // if (res.status === 401) return redirect("/login");
    }
  };

const UserList = () => {
  const data = useLoaderData();
  const res = useActionData();
  const [role, setRole] = useState([]);
  const [userId, setUserId] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [modalIsEdit, setModalIsEdit] = useState(false);
  const initialFormData = {
    Username: "",
    Name: "",
    Password: "",
    Gender: "",
    Age: "",
    YearEntered: "",
    Role: role[0],
  };
  const [userForms, setUserForms] = useReducer(
    formDataReducer,
    initialFormData
  );

  useEffect(() => {
    if (res && res.status === 201) {
      setOpenModal(false);
    }
    if (data) {
      setRole(data[1].data);
    }
    if (userForms.Role) {
      const btn = document.querySelector("#role-combo");
      btn.setAttribute("idval", userForms.Role);
    }
  }, [res, data, userForms.Role]);

  function formDataReducer(state, action) {
    return {
      ...state,
      ...action,
    };
  }

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

  function toggleModal(isOpenModal, forms = null, userId = null) {
    setOpenModal(isOpenModal);
    setUserId(userId);
  }

  const userInputChangeHandler = (
    input,
    type = "text",
    autoComplete = { Id: null, Name: null }
  ) => {
    const { target, keyCode } = input;
    const { value, name } = target;
    switch (type.toLowerCase()) {
      case "number":
        if (isNaN(value) || keyCode === 69) return;
        setUserForms({ [name]: value });
        break;
      case "role":
        setUserForms({ Role: autoComplete?.Id ?? role[0]?.Id });
        break;
      case "text":
      default:
        setUserForms({ [name]: value });
        break;
    }
  };

  // function handleRoleInput(e, newValue) {
  //   setRoleInputValue(e.target.value);
  // }

  const handleFormData = (e) => {
    console.log(document.getElementById("roleInput"));
    const formData = e.originalEvent.FormData;
    formData.set("Role", userForms.Role);
  };

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
        inputChangeHandler={userInputChangeHandler}
        role={role}
        handleFormData={handleFormData}
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
        variant="h4"
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
        color="primary"
        aria-label="add"
        sx={{
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
        onClick={() => toggleModal(true)}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default UserList;
