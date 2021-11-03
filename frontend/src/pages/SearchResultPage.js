import React from "react";
import { useLocation } from "react-router-dom";
import { data } from "../context/mockData/data";
import { SearchResults } from "../components";

function SearchResultPage() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const searchLocation = searchParams.get("search");
  console.log(searchLocation);

  let searchHostel = [];

  data.forEach((hostels) => {
    if (hostels.location === searchLocation) {
      searchHostel.push(hostels);
    }
  });

  console.log(searchHostel);

  return (
    <div>
      <SearchResults searchHostels={searchHostel} />
    </div>
  );
}

export default SearchResultPage;
