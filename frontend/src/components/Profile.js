import React from "react";
import { useSelector } from "react-redux";
import "./Profile.scss";

function Profile() {
  const user = useSelector((state) => state.user.value);
  let userProfile = false;

  const ProfileImg = () => {
    return (
      <div className="profile-img">
        <img src={`#`} alt="#" />
      </div>
    );
  };
  const ProfileText = () => {
    return (
      <div className="profile-text">
        <h3>{user.firstName.charAt(0)}</h3>
      </div>
    );
  };

  return (
    <div className="profile">
      <div>
        <div className="profile-box box">
          <div className="user-box">
            {userProfile ? <ProfileImg /> : <ProfileText />}
            <p>update photo</p>
          </div>
          <div>
            <h3>hi I'm {user.firstName}!</h3>
            <p>joined in {parseInt(user.doj)} </p>
          </div>
        </div>
        <div className="reviews-box box">
          <h4>Reviews by You</h4>
        </div>
      </div>
    </div>
  );
}

export default Profile;
