import React, { useState } from "react";
import "./HostForm.scss";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { setHostel } from "../features/hostHostel";
import { popupModal } from "../features/popupModal";

function HostForm() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    hostelName: "",
    hostelOwnerName: "",
    hostelOwnerNumber: "",
    hostelContactNumber: "",
    hostelType: "",
    nehaRegister: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  let checkFeilds =
    state.hostelName &&
    state.hostelOwnerName &&
    state.hostelOwnerNumber &&
    state.hostelContactNumber &&
    state.hostelType &&
    state.nehaRegister;

  const handleSubmit = () => {
    if (!checkFeilds) {
      return dispatch(popupModal({ message: "Empty fields!", cName: "red" }));
    }
    dispatch(
      setHostel({
        ...state,
      })
    );
  };

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
            <input
              type="text"
              placeholder="Hostel Name"
              name="hostelName"
              value={state.hostelName}
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <h4>Hostel Owner Name</h4>
            <input
              type="text"
              placeholder="Hostel Owner Name"
              name="hostelOwnerName"
              value={state.hostelOwnerName}
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <h4>Owner Contact Number</h4>
            <input
              type="number"
              placeholder="Hostel Owner Number"
              name="hostelOwnerNumber"
              value={state.hostelOwnerNumber}
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <h4>Hostel Contact Number</h4>
            <input
              type="number"
              placeholder="Hostel Contact Number"
              name="hostelContactNumber"
              value={state.hostelContactNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="checkbox-field" onChange={handleChange}>
          <h4>Hostel type</h4>
          <div className="hostelType">
            <input type="radio" name="hostelType" value="Boys" />
            Boys Hostel
          </div>
          <div className="">
            <input type="radio" name="hostelType" value="Girls" />
            Girls Hostel
          </div>
        </div>
        <div className="checkbox-field" onChange={handleChange}>
          <h4>
            Is your Hostel is registered in Nepal Hostel Association (NeHA)?
          </h4>
          <div>
            <input type="radio" name="nehaRegister" value="yes" />
            Yes
          </div>
          <div>
            <input type="radio" name="nehaRegister" value="no" /> No
          </div>
        </div>
        <div onClick={handleSubmit}>
          <Button
            link={checkFeilds ? "/location" : "#"}
            innerText="Next"
            cName="btn-black"
          />
        </div>
      </form>
    </div>
  );
}

export default HostForm;
