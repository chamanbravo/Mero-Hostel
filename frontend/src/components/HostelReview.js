import React, { useState } from "react";
import "./HostelReview.scss";
import Comments from "./Comments";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggle } from "../features/register";

function HostelReview({ review, hostelId }) {
  const [comment, setComment] = useState("");
  const commentBy = useSelector((state) => state.user.value.id);
  const dispatch = useDispatch();

  const sendComment = async () => {
    if (!commentBy) {
      dispatch(toggle({ toggleState: true, sign: "in" }));
    } else {
      setComment("");
      try {
        await axios.post("http://localhost:4000/getcomments", {
          comment,
          hostelId,
          commentBy,
        });
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  };

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
        <button className="btn-color" type="submit" onClick={sendComment}>
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
