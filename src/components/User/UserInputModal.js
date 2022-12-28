import React from "react";
import { Modal } from "@mui/material";
import UserInputForm from "./UserInputForm";

const UserInputModal = (props) => {
  const { openModal, userId, toggleModal, userForms, inputChangeHandler } =
    props;
  return (
    <Modal
      open={openModal}
      onClose={toggleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        width: "50%",
        m: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <UserInputForm
        userForms={userForms}
        userId={userId}
        inputChangeHandler={inputChangeHandler}
      />
    </Modal>
  );
};

export default UserInputModal;
