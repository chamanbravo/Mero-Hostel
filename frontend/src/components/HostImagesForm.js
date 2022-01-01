import React, { useState } from "react";
import "./HostImagesForm.scss";
import Button from "./Button";
import { useSelector } from "react-redux";
import axios from "axios";

function HostImagesForm() {
  const hostelData = useSelector((state) => state.hostHostel);

  const [state, setState] = useState({
    thumbnail: "",
    gallery: "",
  });

  const handleThumbnailChange = (e) => {
    setState({
      thumbnail: e.target.files[0],
    });
  };

  const handleGalleryChange = (e) => {
    setState({
      gallery: e.target.files,
    });
  };

  const data = new FormData();
  // data.append("hostelName", hostelData.value.hostelName);
  data.append("thumbnail", state.thumbnail);

  const handleSubmit = () => {
    console.log(hostelData.value);
    for (let i = 0; i < state.gallery.length; i++) {
      const file = state.gallery[i];
      data.append("gallery", file);
      console.log(file);
    }
    registerHostel();
  };

  const registerHostel = () => {
    axios
      .post("http://localhost:4000/registerhostel", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="host-form">
      <div className="host-user">
        <div className="text">
          <h2>Hoetel Images</h2>
          <p>
            Hostel Images are the most important part of your hostel. It helps
            to make your hostel more visible.
          </p>
        </div>
      </div>
      <form className="host-data-form">
        <div className="images-field">
          <div className="input-field">
            <h4>Hostel Thumbnail</h4>
            <input type="file" onChange={handleThumbnailChange} />
          </div>
          <div className="input-field">
            <h4>Hostel Gallery(min 3)</h4>
            <input type="file" multiple onChange={handleGalleryChange} />
          </div>
        </div>
        <div onClick={handleSubmit}>
          <Button link="#" innerText="Host" cName="btn-black" />
        </div>
      </form>
    </div>
  );
}

export default HostImagesForm;
