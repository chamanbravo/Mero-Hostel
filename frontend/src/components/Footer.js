import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import logo from "../assets/logo.png";

function Footer() {
  const date = new Date();
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-elements">
          <div className="about">
            <p className="about-text">
              Your smart hostel booking site so you can find hostels faster.
            </p>
            <p>Join the community.</p>
            <div className="social-icons">
              <Link to="#">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
          </div>

          <div className="menu1 menulist">
            <ul>
              <li>
                <Link to="#">Mobile Apps</Link>
              </li>
              <li>
                <Link to="#">Company</Link>
              </li>
              <li>
                <Link to="#">Sitemap</Link>
              </li>
            </ul>
          </div>

          <div className="menu2 menulist">
            <ul>
              <li>
                <Link to="#">Help</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">How Merohostel works</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <div className="bottom-container">
          <img src={logo} className="footer-logo" alt="merohostel logo" />
          <p className="copyright-text">
            Copyright {date.getFullYear()} merohostel | All rights reserved |
            Developed by Chaman Bravo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
