import React from "react";
import { Link } from "react-router-dom";

function ToggleMenu({ menuState }) {
  const toggleMenuState = () => {
    menuState(false);
  };
  return (
    <div className="register-menu">
      <ul>
        <li onClick={toggleMenuState}>
          <Link to="#" className="sign">
            Sign up
          </Link>
        </li>
        <li onClick={toggleMenuState}>
          <Link to="#" className="log">
            Log in
          </Link>
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
