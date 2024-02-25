import React, { useEffect, useState } from "react";
import {
  IoMdPerson,
  IoMdHome,
  IoMdInformationCircle,
  IoMdContacts,
} from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { useDispatch, useSelector } from "react-redux";
import Search from "./Search";
import { clearUser } from "../features/UserDetailSlice";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isUserName, setIsUserName] = useState(false);
  const [userName, setUserName] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { token } = useSelector((state) => state.userDetail);

  useEffect(() => {
    if (token) {
      const decode = jwtDecode(token);
      setIsUserName(true);
      setUserName(decode.firstname);
    } else {
      setIsUserName(false);
    }
  }, [token]);

  const dispatch = useDispatch();

  const handleLogin = () => {
    setLogin(!login);
    setRegister(false);
    setSidebarOpen(false); 
  };
  
  const handleRegister = () => {
    setRegister(!register);
    setLogin(false);
    setSidebarOpen(false); 
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCross = () => {
    setLogin(false);
    setRegister(false);
    setSidebarOpen(false); 
  };

  const handleLogout = () => {
    dispatch(clearUser());
    setSidebarOpen(false); 
  };

  const setToken = !!token;
  
  const handleSideBar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleItemClick = () => {
    setSidebarOpen(false); 
  };

  return (
    <>
      <section className="px-[5%] overflow-hidden py-4 sticky top-0 bg-white z-10 border rounded-lg">
        <main className="flex justify-between">
          <div className="p-2">
            <NavLink className="pointer" to="/">
              <img src="/images/hostel.png" alt="Hostel " width="20px" />
            </NavLink>
          </div>

          <Search searchId={"navbar"} />

          <div className="md:flex gap-3 hidden">
            <ul className="lg:flex gap-4 hidden text-center p-2 justify-center items-center">
              <li className="pointer font">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="pointer font">
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li className="pointer font">
                <NavLink to="/contact">Contact</NavLink>
              </li>
              {setToken && (
                <li className="pointer font">
                  <NavLink to="/hostel/search?q=all">Hostel</NavLink>{" "}
                </li>
              )}
            </ul>
            <ul className="flex gap-2">
              {setToken ? (
                <li className="font-semibold border p-2 flex justify-center items-center rounded-xl shadowin pointer">
                  <NavLink to="/hostel/register" onClick={handleItemClick}> Host your hostel</NavLink>
                </li>
              ) : (
                <li
                  className="font-semibold border p-2 flex justify-center items-center  rounded-xl shadowin pointer"
                  onClick={handleLogin}
                >
                  Host your hostel
                </li>
              )}
              <li
                className="p-2 rounded-xl shadowin pointer"
                onClick={toggleDropdown}
              >
                {isUserName ? (
                  <div className="font-semibold pointer gap-2 p-2 flex justify-center items-center">
                    {userName.charAt(0).toUpperCase()}
                    <RxHamburgerMenu />
                  </div>
                ) : (
                  <div className="flex gap-2 p-2 ">
                    <IoMdPerson />
                    <RxHamburgerMenu />
                  </div>
                )}
                {dropdownOpen && (
                  <div
                    className={`fixed inset-0 top-24  left-[90%] lg:left-[92.27%] 
                    xl:left-[93.4%] text-center 2xl:left-[88.3%] w-36 lg:w-36 2xl:w-36 ${
                      setToken ? "h-1/5" : "h-1/5"
                    } md:left-[87%] bg-white border rounded-xl shadow-lg`}
                  >
                    <ul className="my-2">
                      {setToken ? (
                        <>
                          <li className="dropdown p-3 ">
                            <NavLink to="/user/profile" onClick={handleItemClick}>Your Profile</NavLink>
                          </li>

                          <br className="hidden lg:inline-block" />
                          <li className="dropdown p-3 ">
                            <NavLink to="/hostel/search?q=all" onClick={handleItemClick}>Hostel</NavLink>
                          </li>

                          <br className="hidden lg:inline-block" />

                          <li className="dropdown p-3">
                            <NavLink to="/hostel/register" onClick={handleItemClick}>
                              Host your hostel
                            </NavLink>
                          </li>

                          <li className="dropdown p-3" onClick={handleLogout}>
                            Logout
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="dropdown p-3" onClick={handleRegister}>
                            Sign up
                          </li>
                          <li className="p-3 dropdown" onClick={handleLogin}>
                            Sign in
                          </li>
                          <br />

                          <li className="dropdown p-3" onClick={handleRegister}>
                            Host your hostel
                          </li>
                        </>
                      )}

                      <li className="dropdown p-3">Help</li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </main>
      </section>

      {sidebarOpen && (
        <div className="fixed right-[6%] z-10 border rounded-lg w-40 bg-white  flex flex-col items-center justify-center md:hidden">
          <ul className="flex flex-col items-center">
            {setToken ? (
              <>
                <li className="dropdown p-3 ">
                  <NavLink to="/user/profile" onClick={handleItemClick}>Your Profile</NavLink>
                </li>

                <br className="hidden lg:inline-block" />
                <li className="dropdown p-3 ">
                  <NavLink to="/hostel/search?q=all" onClick={handleItemClick}>Hostel</NavLink>
                </li>

                <br className="hidden lg:inline-block" />

                <li className="dropdown p-3">
                  <NavLink to="/hostel/register" onClick={handleItemClick}>Host your hostel</NavLink>
                </li>

                <li className="dropdown p-3" onClick={handleLogout}>
                  Logout
                </li>
                <li className="cursor-pointer py-4" onClick={handleItemClick}>Help</li>
              </>
            ) : (
              <>
                <li
                  className="cursor-pointer py-4"
                  onClick={() => setLogin(true)}
                >
                  Sign In
                </li>
                <li
                  className="cursor-pointer py-4"
                  onClick={() => setRegister(true)}
                >
                  Sign Up
                </li>
                <li
                  className="cursor-pointer py-4"
                  onClick={() => setLogin(true)}
                >
                  Host Your Hostel
                </li>
                <li className="cursor-pointer py-4" onClick={handleItemClick}>Help</li>
              </>
            )}
          </ul>
        </div>
      )}

      <div
        className={`fixed bottom-0 z-10 w-full bg-white p-4 flex justify-around items-center md:hidden`}
      >
        <NavLink to="/">
          <IoMdHome size={24} className="cursor-pointer" />
        </NavLink>
        <NavLink to="/about">
          <IoMdInformationCircle size={24} className="cursor-pointer" />
        </NavLink>
        <NavLink to="/contact">
          <IoMdContacts size={24} className="cursor-pointer" />
        </NavLink>

        <div onClick={handleSideBar}>
          {isUserName ? (
            <div className="font-semibold pointer gap-3 p-2 flex justify-center items-center">
              <div className="text-lg">
                {userName.charAt(0).toUpperCase()}
              </div>
              <RxHamburgerMenu size={18} />
            </div>
          ) : (
            <div className="flex gap-2 p-2 ">
              <IoMdPerson size={18} />
              <RxHamburgerMenu size={18} />
            </div>
          )}
        </div>
      </div>
      {login && !setToken && (
        <Login handleCross={handleCross} handleRegister={handleRegister} />
      )}
      {register && !setToken && (
        <Register handleCross={handleCross} handleLogin={handleLogin} />
      )}
    </>
  );
};

export default Navbar;
