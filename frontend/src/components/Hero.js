import React from "react";
import { Link } from "react-router-dom";
import hostelimg from "../assets/hostelimg.png";
import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Find Hostels all over Nepal</h1>
        <div className="searchbar hero-searchbar">
          <input
            className="search-input hero-inputbar"
            type="text"
            name="search"
            placeholder="Start your search"
            autoComplete="off"
          />
          <Link to="#">
            <i className="fas fa-search search-btn"></i>
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <img src={hostelimg} alt="mero-hostel" />
      </div>
    </div>
  );
}

export default Hero;
