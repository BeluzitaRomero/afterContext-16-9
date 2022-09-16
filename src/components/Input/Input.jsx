import React from "react";
import "./Input.css";

export const Input = ({
  value,
  name,
  type,
  onChange,
  placeholder,
  autoComplete,
  required = false,
}) => {
  return (
    <>
      <input
        className="input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
      />
    </>
  );
};
