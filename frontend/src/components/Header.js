import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <div className="menu">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </div>

        <div className="searchbar hsb">
          <input
            className="search-input hsi"
            autoComplete="off"
            type="text"
            name="search"
            placeholder="Start your search"
          />
          <Link to="#">
            <i className="fas fa-search search-btn sbtnh"></i>
          </Link>
        </div>

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
          <div className="user">
            <i className="fas fa-bars hammenu"></i>
            <i className="fas fa-user-circle userinfo"></i>
          </div>
          <div className="register-menu">
            <ul>
              <li>
                <Link to="#" className="sign">
                  Sign up
                </Link>
              </li>
              <li>
                <Link to="#" className="log">
                  Log in
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="#">Host your hostel</Link>
              </li>
              <li>
                <Link to="#">Help</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
