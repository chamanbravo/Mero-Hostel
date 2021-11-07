import React from "react";
import "./ToggleMenu.scss";
import { Link } from "react-router-dom";
import { toggle } from "../features/register";
import { useDispatch } from "react-redux";

function ToggleMenu({ menuState }) {
  const dispatch = useDispatch();

  const toggleMenuState = () => {
    dispatch(toggle({ toggleState: true }));
    menuState(false);
  };

  return (
    <div className="register-menu">
      <ul>
        <li onClick={toggleMenuState}>
          <p className="sign">Sign up</p>
        </li>
        <li onClick={toggleMenuState}>
          <p className="log">Log in</p>
        </li>
      </ul>
      <ul>
        <li onClick={toggleMenuState}>
          <Link to="#">Host your hostel</Link>
        </li>
        <li onClick={toggleMenuState}>
          <Link to="#">Help</Link>
        </li>
      </ul>
    </div>
  );
}

export default ToggleMenu;
