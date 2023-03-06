import React from "react";
import "./RegisterModal.scss";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { toggle } from "../features/register";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function RegisterModal() {
  const dispatch = useDispatch();
  const register = useSelector((state) => state.register.value);

  const closeModal = () => {
    dispatch(toggle({ toggleState: false }));
  };

  const inup = () => {
    if (register.sign === "up") {
      return <SignUp />;
    } else {
      return <SignIn />;
    }
  };

  return (
    <div>
      <div className="register-modal">
        <i className="far fa-times-circle cross-icon" onClick={closeModal}></i>
        <div className="register-pattern"></div>
        {inup()}
      </div>
      <div className="register-modal-bg" onClick={closeModal}></div>
    </div>
  );
}

export default RegisterModal;
