import React from "react";
import "./ToggleMenu.scss";
import { Link } from "react-router-dom";
import { toggle } from "../features/register";
import { useDispatch } from "react-redux";

function ToggleMenu({ menuState }) {
  const dispatch = useDispatch();

  const toggleUserMenu = () => {
    menuState(false);
  };

  const toggleMenuStateUp = () => {
    dispatch(toggle({ toggleState: true, sign: "up" }));
    toggleUserMenu();
  };

  const toggleMenuStateIn = () => {
    dispatch(toggle({ toggleState: true, sign: "in" }));
    toggleUserMenu();
  };

  return (
    <div className="register-menu">
      <ul>
        <li onClick={toggleMenuStateUp}>
          <p className="sign">Sign up</p>
        </li>
        <li onClick={toggleMenuStateIn}>
          <p className="log">Log in</p>
        </li>
      </ul>
      <ul>
        <li onClick={toggleUserMenu}>
          <Link to="#">Host your hostel</Link>
        </li>
        <li onClick={toggleUserMenu}>
          <Link to="#">Help</Link>
        </li>
      </ul>
    </div>
  );
}

export default ToggleMenu;
