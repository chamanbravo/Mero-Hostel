import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggle } from "../../store/register";
import { scrollToTop } from "../../utils/helper";
import { useAppSelector } from "../../store";
import "./index.scss";

function StickyBar() {
  const user = useAppSelector((state) => state.user);
  const [menu, setMenu] = useState(0);
  const dispatch = useDispatch();
  const toggleMenuStateIn = () => {
    dispatch(toggle({ toggleState: true, sign: "in" }));
  };

  return (
    <div className="sticky-bar">
      <div className="sticky-menu">
        <div className="explore bm">
          <Link
            to="/"
            className={menu === 0 ? "selected" : ""}
            onClick={() => {
              dispatch(toggle({ toggleState: false, sign: "in" }));
              setMenu((prev) => (prev = 0));
              scrollToTop();
            }}
          >
            <i className="fas fa-search icon"></i>
            <p>Explore</p>
          </Link>
        </div>
        <div
          className="host bm"
          onClick={() => {
            scrollToTop();
            !user.firstName && toggleMenuStateIn();
            setMenu((prev) => (prev = 1));
          }}
        >
          <Link
            to={user.firstName ? "/host" : "#"}
            className={menu === 1 ? "selected" : ""}
          >
            <i className="fa fa-home icon"></i>
            <p>Host</p>
          </Link>
        </div>
        <div
          className="login bm"
          onClick={() => {
            scrollToTop();
            !user.firstName && toggleMenuStateIn();
            setMenu((prev) => (prev = 2));
          }}
        >
          <Link
            to={user.firstName ? "/profile" : "#"}
            className={menu === 2 ? "selected" : ""}
          >
            <i className="far fa-user-circle icon"></i>
            <p>{user.firstName ? "Profile" : "LogIn"}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StickyBar;
