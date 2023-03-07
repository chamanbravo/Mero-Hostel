import { Key } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { backendUrl } from "../../utils/helper";
import "./index.scss";

function HostelGallery({ gallery }) {
  return (
    <div className="gallery-slider">
      <AwesomeSlider>
        {gallery.map((img: String, index: Key) => {
          return (
            <img
              data-src={`${backendUrl}/hostels/${img}`}
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
