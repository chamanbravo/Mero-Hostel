import React, { useState } from "react";
import "./HostelReview.scss";
import Comments from "./Comments";

function HostelReview({ review }) {
  const [comment, setComment] = useState("");

  return (
    <div className="hostel-review">
      <h1>{review.length} Reviews</h1>
      <div className="submit-review">
        <div className="input-field">
          <textarea
            type="text"
            placeholder="Your Review"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button className="btn-color" type="submit">
          Submit
        </button>
      </div>
      <div className="all-reviews">
        {review.map((comment, index) => {
          return <Comments {...comment} key={index} />;
        })}
      </div>
    </div>
  );
}

export default HostelReview;
