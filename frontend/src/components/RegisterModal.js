import React from "react";
import "./RegisterModal.scss";
// import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { toggle } from "../features/register";
import { useDispatch } from "react-redux";

function RegisterModal() {
  const dispatch = useDispatch();
  return (
    <div className="register-modal">
      <i
        className="far fa-times-circle cross-icon"
        onClick={() => {
          dispatch(toggle({ toggleState: false }));
        }}
      ></i>
      <div className="register-pattern"></div>
      {/* <SignIn /> */}
      <SignUp />
    </div>
  );
}

export default RegisterModal;
