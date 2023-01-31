import React from "react";
import { Modal } from "@mui/material";
import LocationInputForm from "./LocationInputForm";

const UserInputModal = (props) => {
  const { openModal, toggleModal, locationForms, inputChangeHandler } = props;
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
      <LocationInputForm
        locationForms={locationForms}
        inputChangeHandler={inputChangeHandler}
      />
    </Modal>
  );
};

export default UserInputModal;
