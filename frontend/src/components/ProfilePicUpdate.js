import React, { useState } from "react";
import "./ProfilePicUpdate.scss";

function ProfilePicUpdat({ user }) {
  let { firstName, lastName, profilePic } = user;
  let [state, setState] = useState();

  let handleChange = (e) => {
    setState(e.target.files[0]);
  };

  const ProfileImg = () => {
    return (
      <div className="profile-img">
        {state ? (
          <img
            src={URL.createObjectURL(state)}
            alt="#"
            className="profile-pic"
          />
        ) : (
          <img src={`#`} alt="#" />
        )}
      </div>
    );
  };

  const ProfileText = () => {
    return (
      <div className="profile-text">
        {state ? (
          <img
            src={URL.createObjectURL(state)}
            alt="#"
            className="profile-pic"
          />
        ) : (
          <h3>{firstName.charAt(0) + lastName.charAt(0)}</h3>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="profile-update-bg" />
      <div className="profile-pic-update">
        {profilePic ? <ProfileImg /> : <ProfileText />}
        <div className="update-pic">
          <p>
            A profile photo that shows your face can help people get to know
            you. MeroHostel requires all hosts to have a profile photo.
          </p>
          <label className="upload-file">
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={handleChange}
            />
            Upload Profile Picture
          </label>
          {state ? (
            <div className="profile-btns">
              <button className="submit-btn">Submit</button>
              <button className="cancel-btn">Cancel</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePicUpdat;
