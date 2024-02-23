import React, { useEffect, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = ({ searchId }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchButton = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/hostel/search?q=${search}`);
      setSearch("");
    }
  };

  return (
    <div className="border bg-white rounded-3xl flex p-1 shadowin ">
      <input
        className="pl-4 capitalize rounded-2xl outline-none"
        type="text"
        placeholder="Start your search.."
        name="search"
        value={search}
        autoComplete="off"
        id={searchId}
        onChange={handleSearch}
      />
      <FaSearchLocation className="search" onClick={handleSearchButton} />
    </div>
  );
};

export default Search;
