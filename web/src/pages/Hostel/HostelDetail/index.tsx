import { Key } from "react";
import HostelGallery from "../../../components/HostelGallery";
import Button from "../../../components/Button";
import HostelReview from "../../../components/HostelReview";
import HostelMap from "../../../components/HostelMap";
import "./index.scss";

type HostelDetailProps = {
  id: string;
  hostelName: string;
  hostelPrice: number;
  hostelContactNumber: number;
  hostelAdmissionFee: number;
  hostelSecurityCharges: number;
  gallery: string[];
  city: string;
  street: string;
  stars: number;
  hostelReviews: {
    id: string;
    hostelId: string;
    review: string;
    rating: number;
    userId: string;
    userName: string;
    userImage: string;
  }[];
  amenities: string[];
  hostelType: string;
  hostelRules: string;
  longitude: number;
  latitude: number;
};

function HostelDetail({
  id,
  hostelName,
  hostelPrice,
  hostelContactNumber,
  hostelAdmissionFee,
  hostelSecurityCharges,
  gallery,
  city,
  street,
  stars,
  hostelReviews,
  amenities,
  hostelType,
  hostelRules,
  longitude,
  latitude,
}: HostelDetailProps) {
  const BoysHostel = () => {
    return (
      <h3 className="mini-details">
        <i className="fas fa-male icons"></i>
        {`${hostelType} Hostel`}
      </h3>
    );
  };

  const GirlsHostel = () => {
    return (
      <h3 className="mini-details">
        <i className="fas fa-female icons"></i>
        {`${hostelType} Hostel`}
      </h3>
    );
  };

  let rules = () => {
    let rules = hostelRules.split("\n");
    return rules.map((rule, i: Key) => {
      return <li key={i}>{rule}</li>;
    });
  };

  return (
    <div className="hostel-page">
      <div className="hostel-detail">
        <HostelGallery gallery={gallery} />
        <div className="hostel-header">
          <h1>{hostelName}</h1>
          {hostelType === "Boys" ? <BoysHostel /> : <GirlsHostel />}
          <div className="sub-desc">
            <div className="rating">
              <i className="fas fa-star"></i>
              <p className="stars">{stars}</p>
              <p className="reviews">({hostelReviews.length} reviews)</p>
            </div>
            <h3>{`${street}, ${city}`}</h3>
          </div>
          <div className="description">
            <h1>Description</h1>
            <p>
              Hostel Price per head: <b>Rs {hostelPrice}</b>
            </p>
            <p>
              Hostel Admisson Fee: <b>Rs {hostelAdmissionFee}</b>
            </p>
            <p>
              Hostel Security Charges: <b>Rs {hostelSecurityCharges}</b>
            </p>
            <h3 className="sub-header">Amenities</h3>
            {amenities.map((amenity, i) => {
              return <p key={i}>{amenity.split("_").join(" ")}</p>;
            })}
            <h3 className="sub-header">Hostel Rules</h3>
            <p>{rules()}</p>
          </div>
          <div
            onClick={() =>
              (window.location.href = `tel: ${hostelContactNumber}`)
            }
            className="link-btn"
          >
            <Button link="#" cName="btn-color" innerText="Contact" />
          </div>
        </div>
      </div>
      <div className="hr-bar" />
      <HostelReview review={hostelReviews} hostelId={id} />
      <HostelMap lng={longitude} lat={latitude} />
    </div>
  );
}

export default HostelDetail;
