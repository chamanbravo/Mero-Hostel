import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SearchResults } from "../components";
import axios from "axios";

function SearchResultPage() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const searchLocation = searchParams.get("search");

  let [searchHostel, setSearchHostel] = useState();

  useEffect(() => {
    try {
      axios
        .post("https://merohostel.herokuapp.com/searchhostel", {
          searchLocation,
        })
        .then((res) => {
          setSearchHostel(res.data.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, [searchLocation]);

  return (
    <div>
      <SearchResults searchHostels={searchHostel} />
    </div>
  );
}

export default SearchResultPage;
