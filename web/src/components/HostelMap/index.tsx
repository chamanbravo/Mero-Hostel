import GoogleMapReact from "google-map-react";
import "./index.scss";

type HostelMapProps = {
  lat: string;
  lng: string;
};

function HostelMap({ lat, lng }: HostelMapProps) {
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
