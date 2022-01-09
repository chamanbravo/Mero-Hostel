import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Profile.scss";
import axios from "axios";
import HostelCard from "./HostelCard";

function Profile() {
  const user = useSelector((state) => state.user.value);
  let userId = user.id;
  let userProfile = false;

  let [state, setState] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:4000/userhostel", { userId })
      .then((res) => {
        let data = res.data.data;
        setState(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  console.log(state);

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
        <h3>{user.firstName.charAt(0) + user.lastName.charAt(0)}</h3>
      </div>
    );
  };

  const LoadHostelCard = () => {
    if (state == null) return "";
    if (state.id === undefined) return <Loader />;
    if (state) return <UserHostedHostel />;
  };

  const Loader = () => {
    return <h1 style={{ marginTop: "5rem", textAlign: "center" }}>Loading</h1>;
  };

  const UserHostedHostel = () => {
    return (
      <div className="user-hosted">
        <h4>Hostel Hosted By you</h4>
        <HostelCard hostel={state} />
      </div>
    );
  };

  return (
    <div className="profile">
      <div className="profile-box box">
        <div className="user-box">
          {userProfile ? <ProfileImg /> : <ProfileText />}
          <p>update photo</p>
        </div>
        <div>
          <h3>{`${user.firstName} ${user.lastName}`}</h3>
          <p>joined in {parseInt(user.doj)} </p>
        </div>
        <LoadHostelCard />
      </div>
      <div>
        <div className="reviews-box box">
          <h4>Reviews by You</h4>
        </div>
      </div>
    </div>
  );
}

export default Profile;
