import React, { useEffect, useState } from "react";
import "./Recommend.scss";
import HostelCard from "./HostelCard";
import axios from "axios";

function Recommend() {
  const [hostelData, sethostelData] = useState([]);

  useEffect(() => {
    axios
      .get("https://merohostel.herokuapp.com/hostel")
      .then((res) => {
        let data = res.data.data;
        sethostelData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const Loader = () => {
    return <h1 style={{ marginTop: "5rem", textAlign: "center" }}>Loading</h1>;
  };

  const Content = () => {
    return (
      <div className="hostels-grid">
        {hostelData.map((hostel, index) => {
          return <HostelCard hostel={hostel} key={index} />;
        })}
      </div>
    );
  };

  return (
    <div className="recommended-places">
      <h1>Recommended hostels</h1>
      {hostelData ? <Content /> : <Loader />}
    </div>
  );
}

export default Recommend;
