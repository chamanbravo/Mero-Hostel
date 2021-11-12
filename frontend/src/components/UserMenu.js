import React, { useState } from "react";
import ToggleMenu from "./ToggleMenu";
import "./UserMenu.scss";
import { useSelector } from "react-redux";

function UserMenu() {
  const user = useSelector((state) => state.user.value);

  const [toggle, setToggle] = useState(false);
  const toggleState = () => {
    setToggle(!toggle);
  };

  const menuUser = () => {
    if (user.userName) {
      return (
        <div className="user" onClick={toggleState}>
          <i className="fas fa-bars hammenu"></i>
          <div className="avatar">
            <p>{user.userName[0]}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="user" onClick={toggleState}>
          <i className="fas fa-bars hammenu"></i>
          <i className="fas fa-user-circle userinfo"></i>
        </div>
      );
    }
  };

  return (
    <div>
      {menuUser()}
      {toggle && <ToggleMenu menuState={setToggle} />}
    </div>
  );
}

export default UserMenu;
