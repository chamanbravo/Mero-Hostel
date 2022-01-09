import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.scss";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggle } from "../features/register";
import { scrollToTop } from "../utils/helper";

function Header() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const hostbtn = () => {
    if (!user.firstName) {
      dispatch(toggle({ toggleState: true, sign: "in" }));
    }
  };

  return (
    <div className="header">
      <div className="navbar">
        <div className="menu">
          <Link to="/" onClick={scrollToTop}>
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </div>

        <SearchBar />

        <div className="right-nav">
          <div className="center-nav">
            <ul>
              <li>
                <Button cName="btn-text1" innerText="About" link="#" />
              </li>
              <li>
                <Button cName="btn-text1" innerText="Blog" link="#" />
              </li>
              <li>
                <Button cName="btn-text1" innerText="Contact" link="#" />
              </li>
            </ul>
          </div>

          <div className="hostbtn-header">
            <Link
              to={user.firstName ? "/host" : "#"}
              className="host-btn"
              onClick={hostbtn}
            >
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
