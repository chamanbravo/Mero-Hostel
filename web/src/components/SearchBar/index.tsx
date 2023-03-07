import { useState } from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/helper";
import "./index.scss";

function SearchBar() {
  let [query, setQuery] = useState("");
  const searchValue = (e: { target: { value: string } }): void => {
    setQuery((query = e.target.value));
  };

  return (
    <div className="searchbar">
      <input
        className="search-input"
        autoComplete="off"
        type="text"
        name="search"
        placeholder="Start your search"
        value={query}
        onChange={searchValue}
      />
      <Link to={query && `/hostel?search=${query}`} onClick={scrollToTop}>
        <i className="fas fa-search search-btn"></i>
      </Link>
    </div>
  );
}

export default SearchBar;
