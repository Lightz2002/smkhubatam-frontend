import React, { useReducer } from "react";
import { useLoaderData } from "react-router";
import { getRolesQuery } from "../../api/queries";
import UserInputForm from "./UserInputForm";

export const loader =
  (queryClient) =>
  async ({ request, params }) => {
    try {
      const query = getRolesQuery();

      return (
        queryClient.getQueryData(query) ?? (await queryClient.fetchQuery(query))
      );
    } catch (e) {
      console.log(e);
      // const res = JSON.parse(JSON.stringify(e.response));
      // if (res.status === 401) return redirect("/login");
    }
  };

const UserAdd = () => {
  let role = useLoaderData();

  if (role) role = role.data;

  function formDataReducer(state, action) {
    return {
      ...state,
      ...action,
    };
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

  return (
    <UserInputForm
      userForms={userForms}
      inputChangeHandler={userInputChangeHandler}
      role={role}
    />
  );
};

export default UserAdd;
