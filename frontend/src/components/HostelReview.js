import React from "react";
import "./HostelReview.scss";

function HostelReview({ review }) {
  return (
    <div className="hostel-review">
      <h1>Reviews</h1>
      {review.map((comment, index) => {
        return (
          <div className="review" key={index}>
            <div className="review-user">
              <img src={comment.profile} alt="mero hostel" />
              <p>{comment.name}</p>
            </div>
            <div className="comment">
              <p>{comment.comment}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HostelReview;
