import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SearchResults } from "../components";
import axios from "axios";
import { backendUrl } from "../utils/helper";

function SearchResultPage() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const searchLocation = searchParams.get("search");

  let [searchHostel, setSearchHostel] = useState();

  useEffect(() => {
    try {
      axios
        .post(`${backendUrl}/searchhostel`, {
          searchLocation,
        })
        .then((res) => {
          setSearchHostel(res.data.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, [searchLocation]);

  return <SearchResults searchHostels={searchHostel} />;
}

export default SearchResultPage;
