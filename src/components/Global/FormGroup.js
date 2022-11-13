import React from "react";
import { useState, useEffect } from "react";

const FormGroup = ({ name, type, label, placeholder, value, setFormValue }) => {
  const onChangeHandler = (e) => {
    setFormValue({
      name: e.target.name,
      value: e.target.value,
      type: e.target.type,
      label: label,
    });
  };

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default FormGroup;
