import React from "react";
import hostelimg from "../assets/hostelimg.png";
import "./Hero.scss";
import SearchBar from "./SearchBar";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Find Hostels all over Nepal</h1>
        <SearchBar />
      </div>
      <div className="hero-image">
        <img src={hostelimg} alt="mero-hostel" />
      </div>
    </div>
  );
}

export default Hero;
