import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggle } from "../../store/register";
import { setUser } from "../../store/user";
import "./index.scss";
import { useAppSelector } from "../../store";

type ToggleMenuProps = {
  menuState: (state: boolean) => void;
};

function ToggleMenu({ menuState }: ToggleMenuProps) {
  const user = useAppSelector((state) => state.user);
  const dispatch = useDispatch();

  const toggleUserMenu = () => {
    menuState(false);
  };

  const toggleMenuStateUp = () => {
    dispatch(toggle({ toggleState: true, sign: "up" }));
    toggleUserMenu();
  };

  const toggleMenuStateIn = () => {
    dispatch(toggle({ toggleState: true, sign: "in" }));
    toggleUserMenu();
  };

  const hostbtn = () => {
    if (!user) {
      dispatch(toggle({ toggleState: true, sign: "in" }));
    }
  };

  const menu = () => {
    if (user.firstName) {
      return (
        <div className="register-menu">
          <ul>
            <Link to="/profile">
              <li onClick={toggleUserMenu}>Profile</li>
            </Link>
            <Link to="/host">
              <li onClick={toggleUserMenu}>Host your hostel</li>
            </Link>
          </ul>
          <ul>
            <Link to="#">
              <li onClick={toggleUserMenu}>Help</li>
            </Link>
            <li onClick={toggleUserMenu}>
              <p
                onClick={() => {
                  dispatch(setUser({}));
                }}
              >
                Sign out
              </p>
            </li>
          </ul>
          <div className="userMenu-modal-bg" onClick={toggleUserMenu}></div>
        </div>
      );
    } else {
      return (
        <div className="register-menu">
          <ul>
            <li onClick={toggleMenuStateUp}>
              <p className="sign">Sign up</p>
            </li>
            <li onClick={toggleMenuStateIn}>
              <p className="log">Sign in</p>
            </li>
          </ul>
          <ul>
            <Link to={user ? "/host" : "#"} onClick={hostbtn}>
              <li onClick={toggleUserMenu}>Host your hostel</li>
            </Link>
            <Link to="#">
              <li onClick={toggleUserMenu}>Help</li>
            </Link>
          </ul>
          <div className="userMenu-modal-bg" onClick={toggleUserMenu}></div>
        </div>
      );
    }
  };

  return menu();
}

export default ToggleMenu;
