import GoogleMapReact from "google-map-react";
import "./index.scss";

function HostelMap({ lat, lng }) {
  let center = { lat: parseFloat(lat), lng: parseFloat(lng) };
  let zoom = 18;

  return (
    <div className="hostel-mapbox">
      <GoogleMapReact
        // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
        defaultCenter={center}
        defaultZoom={zoom}
      />
    </div>
  );
}

export default HostelMap;
