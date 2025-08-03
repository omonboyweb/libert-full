import React from "react";

export const Input = ({ placeholder, type, style, onChange }) => {
  return (
    <input
      type={type}
      className={style}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
