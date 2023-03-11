import HostelCard from "../../../components/HostelCard";
import "./index.scss";

type SearchResultsProps = {
  searchHostels: {
    id: string;
    hostelName: string;
    hostelPrice: number;
    hostelContactNumber: number;
    hostelAdmissionFee: number;
    hostelSecurityCharges: number;
    thumbnail: string;
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
  }[];
};

function SearchResults({ searchHostels }: SearchResultsProps) {
  const renderResults = () => {
    if (searchHostels === undefined) {
      return <h1 style={{ textAlign: "center" }}>Loading</h1>;
    } else if (searchHostels.length > 0) {
      return (
        <div className="hostels-grid">
          {searchHostels.map((hostel) => {
            return <HostelCard key={hostel.id} hostel={hostel} />;
          })}
        </div>
      );
    } else {
      return <h1 style={{ textAlign: "center" }}>No results found</h1>;
    }
  };

  return <div className="search-results">{renderResults()}</div>;
}

export default SearchResults;
