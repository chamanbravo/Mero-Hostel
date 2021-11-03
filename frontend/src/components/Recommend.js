import React from "react";
import "./Recommend.scss";
import { data } from "../context/mockData/data";
import HostelCard from "./HostelCard";

function Recommend() {
  return (
    <div className="recommended-places">
      <h1>Recommended hostels</h1>
      <div className="hostels-grid">
        {data.map((hostel, index) => {
          return <HostelCard hostel={hostel} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Recommend;
