import React from "react";
import HostelGallery from "./HostelGallery";
import "./HostelDetail.scss";
// import HostelReview from "./HostelReview";

function HostelDetail({ id, hostelName, gallery, city, street }) {
  return (
    <div className="hostel-page">
      <div className="hostel-detail">
        <HostelGallery gallery={gallery} />
        <div className="hostel-desc">
          <h1>{hostelName}</h1>
          <div className="sub-desc">
            <div className="rating">
              <i className="fas fa-star"></i>
              {/* <p className="stars">{star}</p>
              <p className="reviews">({reviews.length} reviews)</p> */}
            </div>
            <h3>{`${street}, ${city}`}</h3>
          </div>
        </div>
      </div>
      <div className="hr-bar" />
      {/* <HostelReview review={reviews} /> */}
    </div>
  );
}

export default HostelDetail;
