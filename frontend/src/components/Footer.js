import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import logo from "../assets/logo.png";
import Button from "./Button";

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
                <Button cName="btn-text2" innerText="Mobile Apps" link="#" />
              </li>
              <li>
                <Button cName="btn-text2" innerText="Company" link="#" />
              </li>
              <li>
                <Button cName="btn-text2" innerText="Sitemap" link="#" />
              </li>
            </ul>
          </div>

          <div className="menu2 menulist">
            <ul>
              <li>
                <Button cName="btn-text2" innerText="Help" link="#" />
              </li>
              <li>
                <Button cName="btn-text2" innerText="Privacy Policy" link="#" />
              </li>
              <li>
                <Button
                  cName="btn-text2"
                  innerText="How Merohostel works"
                  link="#"
                />
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
