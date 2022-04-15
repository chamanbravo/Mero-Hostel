import React, { useState } from "react";
import ToggleMenu from "./ToggleMenu";
import "./UserMenu.scss";
import { useSelector } from "react-redux";

function UserMenu() {
  const user = useSelector((state) => state.user.value);
  let { firstName, lastName, profilePic } = user;

  const [toggle, setToggle] = useState(false);
  const toggleState = () => {
    setToggle(!toggle);
  };

  const ProfileImg = () => {
    return (
      <div className="profile-img">
        <img
          src={`https://merohostel.herokuapp.com/users/${profilePic}`}
          alt="#"
          className="profile-pic"
        />
      </div>
    );
  };
  const ProfileText = () => {
    return <p>{firstName.charAt(0) + lastName.charAt(0)}</p>;
  };

  const menuUser = () => {
    if (user.firstName) {
      return (
        <div className="user" onClick={toggleState}>
          <i className="fas fa-bars hammenu"></i>
          <div className="avatar">
            {profilePic ? <ProfileImg /> : <ProfileText />}
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
