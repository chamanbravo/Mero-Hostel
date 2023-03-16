import { SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "../../store/user";
import { backendUrl } from "../../utils/helper";
import "./index.scss";

type ProfilePicUpdatProps = {
  user: {
    firstName: string;
    lastName: string;
    profilePic: string;
    id: string;
    email: string;
  };
  modalState: (state: boolean) => void;
};

function ProfilePicUpdat({ user, modalState }: ProfilePicUpdatProps) {
  let { firstName, lastName, profilePic, id, email } = user;
  const dispatch = useDispatch();
  let [state, setState] = useState();

  let handleChange = (e: {
    target: { files: SetStateAction<undefined>[] };
  }) => {
    setState(e.target.files[0]);
  };

  let data = new FormData();
  data.append("profilePic", state);
  data.append("userName", firstName);
  data.append("id", id);

  const uploadProfile = async () => {
    modalState(false);
    try {
      let picUpdate = await axios.post(`${backendUrl}/userpic`, data);
      let newProfilePic = picUpdate.data.msg;
      dispatch(
        setUser({ firstName, lastName, id, email, profilePic: newProfilePic })
      );
      modalState(false);
    } catch (err) {
      console.log(err);
    }
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
          <img
            src={`${backendUrl}/users/${profilePic}`}
            alt="#"
            className="profile-pic"
          />
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
      <div className="profile-update-bg" onClick={() => modalState(false)} />
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
              onChange={(e) => handleChange}
            />
            Upload Profile Picture
          </label>
          {state && (
            <div className="profile-btns">
              <button className="submit-btn" onClick={uploadProfile}>
                Submit
              </button>
              <button className="cancel-btn" onClick={() => modalState(false)}>
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePicUpdat;
