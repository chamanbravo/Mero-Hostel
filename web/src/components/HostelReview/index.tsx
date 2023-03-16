import { Key, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Comments from "./../Comments";
import { toggle } from "../../store/register";
import { popupModal } from "../../store/popupModal";
import { backendUrl } from "../../utils/helper";
import { useAppSelector } from "../../store";
import "./index.scss";

type HostelReviewProps = {
  review: {
    id: string;
    hostelId: string;
    review: string;
    rating: number;
    userId: string;
    userName: string;
    userImage: string;
  }[];
  hostelId: string;
};

function HostelReview({ review, hostelId }: HostelReviewProps) {
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState(review);
  const commentBy = useAppSelector((state) => state.user.id);
  const dispatch = useDispatch();

  const sendComment = async () => {
    if (!comment) {
      return dispatch(popupModal({ message: "Empty comment!", cName: "red" }));
    }
    if (!commentBy) {
      return dispatch(toggle({ toggleState: true, sign: "in" }));
    }
    setComment("");
    try {
      await axios
        .post(`${backendUrl}/getcomments`, {
          comment,
          hostelId,
          commentBy,
        })
        .then((res) => {
          setReviews(res.data.reviews);
        });
    } catch (err) {
      console.log(err);
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
        {reviews.map((comment, index: Key) => {
          return <Comments {...comment} key={index} />;
        })}
      </div>
    </div>
  );
}

export default HostelReview;
