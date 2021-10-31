import React from "react";
import "./Recommend.scss";
import { data } from "../context/mockData/data";

function Recommend() {
  return (
    <div className="recommended-places">
      <h1>Recommended hostels</h1>
      <div className="hostels-grid">
        {data.map((hostel, index) => {
          return (
            <div className="hostel-card" key={index}>
              <img
                src={hostel.image}
                className="hostel-pic"
                alt="mero hostel"
              />
              <div className="hostel-info">
                <h3 className="hostel-name">{hostel.name}</h3>
                <h3 className="location">
                  <i className="fas fa-map-marked-alt map-icon"></i>
                  {hostel.location}
                </h3>
                <div className="rate-price">
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <p className="stars">{hostel.star}</p>
                    <p className="reviews">({hostel.reviews.length} reviews)</p>
                  </div>
                  <div className="price">
                    <h4>Rs {hostel.price}</h4>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recommend;
