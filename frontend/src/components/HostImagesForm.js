import React from "react";
import "./HostImagesForm.scss";
import Button from "./Button";

function HostImagesForm() {
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
            <input type="file" />
          </div>
          <div className="input-field">
            <h4>Hostel Gallery(min 3)</h4>
            <input type="file" multiple />
          </div>
        </div>
        <Button link="#" innerText="Next" cName="btn-black" />
      </form>
    </div>
  );
}

export default HostImagesForm;
