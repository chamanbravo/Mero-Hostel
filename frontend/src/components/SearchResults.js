import React from "react";
import HostelCard from "./HostelCard";
import "./SearchResult.scss";

function SearchResults(searchHostels) {
  console.log(searchHostels);
  return (
    <div className="search-results">
      <div className="hostels-grid">
        {searchHostels.searchHostels.map((searchResult, index) => {
          return <HostelCard key={index} hostel={searchResult} />;
        })}
      </div>
    </div>
  );
}

export default SearchResults;
