import React from "react";
import HostelCard from "./HostelCard";
import "./SearchResults.scss";

function SearchResults({ searchHostels }) {
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
