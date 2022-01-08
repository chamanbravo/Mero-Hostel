import React from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/helper";
import "./HostelCard.scss";

function HostelCard({ hostel }) {
  const { id, hostelName, city, hostelPrice, thumbnail } = hostel;
  return (
    <Link to={`/hostel/${id}`} onClick={scrollToTop}>
      <div className="hostel-card">
        <img
          src={`http://localhost:4000/hostels/${thumbnail}`}
          className="hostel-pic"
          alt={hostelName}
        />
        <div className="hostel-info">
          <h3 className="hostel-name">{hostelName}</h3>
          <h3 className="location">
            <i className="fas fa-map-marked-alt map-icon"></i>
            {city}
          </h3>
          <div className="rate-price">
            <div className="rating">
              <i className="fas fa-star"></i>
              {/* <p className="stars">{star}</p>
              <p className="reviews">({reviews.length} reviews)</p> */}
            </div>
            <div className="price">
              <h4>Rs {hostelPrice}</h4>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HostelCard;
