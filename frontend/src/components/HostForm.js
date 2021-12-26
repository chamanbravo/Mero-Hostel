import React from "react";
import "./HostForm.scss";
import Button from "./Button";

function HostForm() {
  return (
    <div className="host-form">
      <div className="host-user">
        <div className="text">
          <h2>Hello !</h2>
          <p>
            Are you a Hostel owner? Host your hostel and make your hostel more
            visible. It's easy and fast!
          </p>
        </div>
      </div>
      <form className="host-data-form">
        <div className="text-field">
          <div className="input-field">
            <h4>Hostel Name</h4>
            <input type="text" placeholder="Hostel Name" name="hostelName" />
          </div>
          <div className="input-field">
            <h4>Hostel Owner Name</h4>
            <input
              type="text"
              placeholder="Hostel Owner Name"
              name="hostelOwnerName"
            />
          </div>
          <div className="input-field">
            <h4>Owner Contact Number</h4>
            <input
              type="number"
              placeholder="Hostel Owner Number"
              name="hostelOwnerName"
            />
          </div>
          <div className="input-field">
            <h4>Hostel Contact Number</h4>
            <input
              type="number"
              placeholder="Hostel Owner Number"
              name="hostelOwnerNumber"
            />
          </div>
        </div>
        <div className="checkbox-field">
          <h4>Hostel type</h4>
          <div className="">
            <input type="checkbox" name="BoysHostel" />
            <label htmlFor="hostelType">Boys Hostel</label>
          </div>
          <div className="">
            <input type="checkbox" name="GirlsHostel" />
            <label htmlFor="hostelType">Girls Hostel</label>
          </div>
        </div>
        <div className="checkbox-field">
          <h4>
            Is your Hostel is registered in Nepal Hostel Association (NeHA)?
          </h4>
          <div>
            <input type="checkbox" name="BoysHostel" />
            <label htmlFor="hostelType">Yes</label>
          </div>
          <div>
            <input type="checkbox" name="BoysHostel" />
            <label htmlFor="hostelType">No</label>
          </div>
        </div>
        <Button link="host/location" innerText="Next" cName="btn-black" />
      </form>
    </div>
  );
}

export default HostForm;
