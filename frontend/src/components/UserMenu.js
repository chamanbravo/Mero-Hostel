import React, { useState } from "react";
import ToggleMenu from "./ToggleMenu";

function UserMenu() {
  const [toggle, setToggle] = useState(false);
  const toggleState = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className="user" onClick={toggleState}>
        <i className="fas fa-bars hammenu"></i>
        <i className="fas fa-user-circle userinfo"></i>
      </div>
      {toggle && <ToggleMenu menuState={setToggle} />}
    </div>
  );
}

export default UserMenu;
