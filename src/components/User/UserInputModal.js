import React from "react";
import { Modal } from "@mui/material";
import UserInputForm from "./UserInputForm";

const UserInputModal = (props) => {
  const {
    openModal,
    userId,
    toggleModal,
    userForms,
    role,
    inputChangeHandler,
  } = props;
  return (
    <Modal
      open={openModal}
      onClose={toggleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        width: "50%",
        m: "0 auto",
        // pb: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <UserInputForm
        userForms={userForms}
        userId={userId}
        inputChangeHandler={inputChangeHandler}
        role={role}
      />
    </Modal>
  );
};

export default UserInputModal;
