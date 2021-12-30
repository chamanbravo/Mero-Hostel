import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import "./HostLocation.scss";
import Button from "./Button";

function HostLocation() {
  const [state, setState] = useState({
    street: "",
    city: "",
    state: "",
  });

  const handleChange = (e) =>
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

  const defaultProps = {
    center: {
      lat: 27.68883,
      lng: 85.335615,
    },
    zoom: 13,
  };

  return (
    // Important! Always set the container height explicitly
    <div className="host-location">
      <div className="mapBox">
        <GoogleMapReact
          //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        ></GoogleMapReact>
      </div>
      <form className="host-location-form">
        <div>
          <div className="input-field">
            <h4>Street</h4>
            <input
              type="text"
              placeholder="Street"
              name="street"
              value={state.street}
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <h4>City</h4>
            <input
              type="text"
              placeholder="City"
              name="city"
              value={state.city}
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <h4>State</h4>
            <input
              type="text"
              placeholder="State"
              name="state"
              value={state.state}
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <h4>Country/Region</h4>
            <p>Nepal</p>
          </div>
        </div>
        <Button link="amenities" innerText="Next" cName="btn-black" />
      </form>
    </div>
  );
}

export default HostLocation;
