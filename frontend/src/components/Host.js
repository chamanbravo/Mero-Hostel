import React from "react";
import { Link } from "react-router-dom";
import "./Host.scss";

function Host() {
  return (
    <div className="host-section">
      <div className="host-text">
        <div className="htext">
          <h1>Host your Hostel.</h1>
          <p>
            Are you a hostel owner? Host your hostel and Provide a place for
            students.
          </p>
          <Link to="#" className="btn">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Host;
