import React, { useState, useEffect } from "react";
import axios from "axios";

function Comments({ comment, commentBy }) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    profilePic: "",
  });

  let userId = commentBy;
  useEffect(() => {
    axios
      .post("http://localhost:4000/api/senduserinfo", { userId })
      .then((res) => {
        let data = res.data.user[0];
        let { firstname, lastname, profilePic } = data;
        setUserInfo({ name: `${firstname} ${lastname}`, profilePic });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="review">
      <div className="user-profile">
        <div className="comment-profile-img">
          <img
            src={`http://localhost:4000/users/${userInfo.profilePic}`}
            alt={userInfo.name}
          />
        </div>
        <p className="user-name">{userInfo.name}</p>
      </div>
      <div className="comment">
        <p>{comment}</p>
      </div>
    </div>
  );
}

export default Comments;
