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

  const inup = () => {
    if (register.sign === "up") {
      return <SignUp />;
    } else {
      return <SignIn />;
    }
  };

  console.log(register.sign);

  return (
    <div className="register-modal">
      <i
        className="far fa-times-circle cross-icon"
        onClick={() => {
          dispatch(toggle({ toggleState: false }));
        }}
      ></i>
      <div className="register-pattern"></div>
      {inup()}
    </div>
  );
}

export default RegisterModal;
