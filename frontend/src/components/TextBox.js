import React from "react";
import "./TextBox.scss";

function TextBox({ inputName, name, type, placeholder }) {
  return (
    <div className="input-field">
      <h4>{inputName}</h4>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
}

export default TextBox;
