import React from "react";
import Button from "./Button";

function HostAmenitiesForm() {
  return (
    <div className="host-form">
      <div className="host-user">
        <div className="text">
          <h2>Amenities</h2>
          <p>
            Hostel Amenities are a great way to help people get to know about
            your place.
          </p>
        </div>
      </div>
      <form className="host-data-form">
        <div className="text-field">
          <div className="input-field">
            <h4>Total capacity of your Hostel?</h4>
            <input
              type="number"
              placeholder="total capacity"
              name="hostelCapacity"
            />
          </div>
          <div className="input-field">
            <h4>Total number of rooms in your hostel</h4>
            <input
              type="number"
              placeholder="total no of rooms"
              name="hostelRooms"
            />
          </div>
          <div className="input-field">
            <h4>Price of room(Rs)</h4>
            <input
              type="number"
              placeholder="price of room"
              name="hostelPrice"
            />
          </div>
          <div className="input-field">
            <h4>Admission Fee</h4>
            <input
              type="number"
              placeholder="Admission Fee"
              name="hostelAdmissionFee"
            />
          </div>
          <div className="input-field">
            <h4>
              Security Charges
              <br />
              (if you don't charge please insert 0)
            </h4>
            <input
              type="number"
              placeholder="Security Charges"
              name="hostelSecurityCharges"
            />
          </div>
        </div>
        <div className="checkbox-field">
          <h4>Amenities(Tick the amenities you provide)</h4>
          <div className="">
            <input type="checkbox" name="BoysHostel" />
            <label htmlFor="hostelType">Wifi</label>
          </div>
          <div className="">
            <input type="checkbox" name="GirlsHostel" />
            <label htmlFor="hostelType">Parking Space</label>
          </div>
          <div className="">
            <input type="checkbox" name="GirlsHostel" />
            <label htmlFor="hostelType">Laundary</label>
          </div>
          <div className="">
            <input type="checkbox" name="GirlsHostel" />
            <label htmlFor="hostelType">Furniture</label>
          </div>
          <div className="">
            <input type="checkbox" name="GirlsHostel" />
            <label htmlFor="hostelType">Air conditioning</label>
          </div>
        </div>
        <Button link="hostelImages" innerText="Next" cName="btn-black" />
      </form>
    </div>
  );
}

export default HostAmenitiesForm;
