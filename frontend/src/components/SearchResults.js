import React from "react";
import HostelCard from "./HostelCard";
import "./SearchResults.scss";

function SearchResults(searchHostels) {
  let foundResults = searchHostels.searchHostels;
  const renderResults = () => {
    if (foundResults.length > 0) {
      return foundResults.map((hostel) => {
        return <HostelCard key={hostel.id} hostel={hostel} />;
      });
    } else {
      return <h1>No results found</h1>;
    }
  };

  return (
    <div className="search-results">
      <div className="hostels-grid">{renderResults()}</div>
    </div>
  );
}

export default SearchResults;
