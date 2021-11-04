import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.scss";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <div className="menu">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </div>

        <SearchBar />

        <div className="right-nav">
          <div className="center-nav">
            <ul>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="hostbtn-header">
            <Link to="#" className="host-btn">
              Host your hostel
            </Link>
          </div>

          <UserMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;
