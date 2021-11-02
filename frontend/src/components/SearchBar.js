import React from "react";
import { Link } from "react-router-dom";
import "./SearchBar.scss";

function SearchBar() {
  return (
    <div className="searchbar">
      <input
        className="search-input"
        autoComplete="off"
        type="text"
        name="search"
        placeholder="Start your search"
      />
      <Link to="#">
        <i className="fas fa-search search-btn"></i>
      </Link>
    </div>
  );
}

export default SearchBar;
