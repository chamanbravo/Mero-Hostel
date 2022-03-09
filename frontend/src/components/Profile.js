import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Profile.scss";
import axios from "axios";
import HostelCard from "./HostelCard";
import ProfilePicUpdate from "./ProfilePicUpdate";
import { Link } from "react-router-dom";

function Profile() {
  const user = useSelector((state) => state.user.value);
  let { id, firstName, lastName, doj, profilePic } = user;
  let [userHostel, setState] = useState([]);
  let [userComments, setUserComments] = useState([]);
  let [picUpdateModal, setPicUpdateModal] = useState(false);

  useEffect(() => {
    axios
      .post("http://localhost:4000/userhostel", { id })
      .then((res) => {
        let data = res.data;
        let { userHostelDetails, userReviews } = data;
        setState(userHostelDetails);
        setUserComments(userReviews);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const ProfileImg = () => {
    return (
      <div className="profile-img">
        <img
          src={`http://localhost:4000/users/${profilePic}`}
          alt="#"
          className="profile-pic"
        />
      </div>
    );
  };

  const ProfileText = () => {
    return (
      <div className="profile-text">
        <h3>{firstName.charAt(0) + lastName.charAt(0)}</h3>
      </div>
    );
  };

  const LoadHostelCard = () => {
    if (userHostel == null) return "";
    if (userHostel.id === undefined) return <Loader />;
    if (userHostel) return <UserHostedHostel />;
  };

  const LoadUserComments = () => {
    if (userComments == null) return "";
    if (userComments) return <UserComments />;
  };

  const Loader = () => {
    return <h1 style={{ marginTop: "5rem", textAlign: "center" }}>Loading</h1>;
  };

  const UserHostedHostel = () => {
    return (
      <div className="user-hosted">
        <h4>Hostel Hosted By you</h4>
        <HostelCard hostel={userHostel} />
      </div>
    );
  };

  const UserComments = () => {
    return (
      <div className="user-comments">
        {userComments.map((comment, index) => {
          return (
            <div className="user-reviews box" key={index}>
              <div>
                <Link to={`/hostel/${comment.id}`}>
                  <h3 className="hostel-name">{comment.hostelName}</h3>
                </Link>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <p className="stars">{comment.stars}</p>
                  <p className="reviews">({comment.reviews} reviews)</p>
                </div>
              </div>
              <p>{comment.comment}</p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="profile">
      <div className="profile-box box">
        <div className="user-box">
          {profilePic ? <ProfileImg /> : <ProfileText />}
          <p
            className="update-pic-link"
            onClick={() => setPicUpdateModal(!picUpdateModal)}
          >
            update photo
          </p>
        </div>
        <div>
          <h3>{`${firstName} ${lastName}`}</h3>
          <p>joined in {parseInt(doj)} </p>
        </div>
        <LoadHostelCard />
      </div>
      <div>
        <div className="reviews-box">
          <h4>Reviews by You ({userComments.length} reviews)</h4>
          <LoadUserComments />
        </div>
      </div>
      {picUpdateModal && (
        <ProfilePicUpdate user={user} modalState={setPicUpdateModal} />
      )}
    </div>
  );
}

export default Profile;
