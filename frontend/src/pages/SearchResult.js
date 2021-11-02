import React from "react";
import { withRouter, useLocation } from "react-router-dom";
import { data } from "../context/mockData/data";

function SearchResult() {
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
      {searchHostel.map((SearchResult, index) => {
        return <h1>{SearchResult.name}</h1>;
      })}
    </div>
  );
}

export default withRouter(SearchResult);
