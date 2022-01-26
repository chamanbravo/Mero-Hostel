import React, { useState, useEffect } from "react";
import "./HostelReview.scss";
import axios from "axios";

function HostelReview({ review }) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    profilePic: "",
  });

  const ApiCall = (userId) => {
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
    }, [userId]);
  };

  return (
    <div className="hostel-review">
      <h1>Reviews</h1>
      {review.map((comment, index) => {
        let userId = comment.commentBy;
        ApiCall(userId);
        console.log(userInfo);
        if (userInfo.name === "") {
          return <div>Loading...</div>;
        } else {
          return (
            <div className="review" key={index}>
              <div className="review-user">
                <img
                  src={`http://localhost:4000/users/${userInfo.profilePic}`}
                  alt="mero hostel"
                />
                <p>{userInfo.name}</p>
              </div>
              <div className="comment">
                <p>{comment.comment}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default HostelReview;
