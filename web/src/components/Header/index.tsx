import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo.png";
import SearchBar from "../SearchBar";
import UserMenu from "../UserMenu";
import Button from "../Button";
import { toggle } from "../../store/register";
import { scrollToTop } from "../../utils/helper";
import { useAppDispatch, useAppSelector } from "../../store";
import "./index.scss";

function Header() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

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
