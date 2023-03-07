import { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl } from "../../utils/helper";

function Comments({ comment, commentBy }) {
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    profilePic: "",
  });

  let userId = commentBy;
  useEffect(() => {
    axios
      .post(`${backendUrl}/api/senduserinfo`, { userId })
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
          src={`${backendUrl}/users/${userInfo.profilePic}`}
          alt={userInfo.firstname + " " + userInfo.lastname}
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
