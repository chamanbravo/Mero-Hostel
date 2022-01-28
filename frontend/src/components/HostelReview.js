import React from "react";
import "./HostelReview.scss";
import Comments from "./Comments";

function HostelReview({ review }) {
  return (
    <div className="hostel-review">
      <h1>Reviews</h1>
      <div className="all-reviews">
        {review.map((comment, index) => {
          return <Comments {...comment} key={index} />;
        })}
      </div>
    </div>
  );
}

export default HostelReview;
