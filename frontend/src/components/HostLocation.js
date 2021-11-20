import React from "react";
import GoogleMapReact from "google-map-react";

function HostLocation() {
  const defaultProps = {
    center: {
      lat: 27.68883,
      lng: 85.335615,
    },
    zoom: 11,
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "600px", width: "100%" }}>
      <GoogleMapReact
        //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
}

export default HostLocation;
