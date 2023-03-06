import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

function Button({ link, cName, innerText }) {
  return (
    <Link to={link} className={cName}>
      {innerText}
    </Link>
  );
}

export default Button;
