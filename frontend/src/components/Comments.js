import React, { useState, useEffect } from "react";
import axios from "axios";

function Comments({ comment, commentBy }) {
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    profilePic: "",
  });

  let userId = commentBy;
  useEffect(() => {
    axios
      .post("https://merohostel.herokuapp.com/api/senduserinfo", { userId })
      .then((res) => {
        let data = res.data.user[0];
        let { firstname, lastname, profilePic } = data;
        setUserInfo({ firstname, lastname, profilePic });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const ProfileImg = () => {
    return (
      <div className="comment-profile-img">
        <img
          src={`https://merohostel.herokuapp.com/users/${userInfo.profilePic}`}
          alt={userInfo.name}
        />
      </div>
    );
  };
  const ProfileText = () => {
    return (
      <div className="comment-profile-text">
        <h3>{userInfo.firstname.charAt(0) + userInfo.lastname.charAt(0)}</h3>
      </div>
    );
  };

  return (
    <div className="review">
      <div className="user-profile">
        {userInfo.profilePic ? <ProfileImg /> : <ProfileText />}
        <p className="user-name">{`${userInfo.firstname} ${userInfo.lastname}`}</p>
      </div>
      <div className="comment">
        <p>{comment}</p>
      </div>
    </div>
  );
}

export default Comments;
