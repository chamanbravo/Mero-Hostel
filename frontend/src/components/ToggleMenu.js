import React from "react";
import "./ToggleMenu.scss";
import { Link } from "react-router-dom";
import { toggle } from "../features/register";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUser } from "../features/user";

function ToggleMenu({ menuState }) {
  const user = useSelector((state) => state.user.value);
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

  const menu = () => {
    if (user.userName) {
      return (
        <div className="register-menu">
          <ul>
            <li onClick={toggleUserMenu}>
              <Link to="#">Profile</Link>
            </li>
            <li onClick={toggleUserMenu}>
              <Link to="#">Host your hostel</Link>
            </li>
          </ul>
          <ul>
            <li onClick={toggleUserMenu}>
              <Link to="#">Help</Link>
            </li>
            <li onClick={toggleUserMenu}>
              <p
                onClick={() => {
                  dispatch(setUser({ userName: "" }));
                }}
              >
                Sign out
              </p>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="register-menu">
          <ul>
            <li onClick={toggleMenuStateUp}>
              <p className="sign">Sign up</p>
            </li>
            <li onClick={toggleMenuStateIn}>
              <p className="log">Sign in</p>
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
  };

  return menu();
}

export default ToggleMenu;
