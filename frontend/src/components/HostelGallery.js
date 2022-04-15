import React from "react";
import "./HostelGallery.scss";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

function HostelGallery({ gallery }) {
  return (
    <div className="gallery-slider">
      <AwesomeSlider>
        {gallery.map((img, index) => {
          return (
            <img
              data-src={`https://merohostel.herokuapp.com/hostels/${img}`}
              alt="mero hostel"
              key={index}
            />
          );
        })}
      </AwesomeSlider>
    </div>
  );
}

export default HostelGallery;
