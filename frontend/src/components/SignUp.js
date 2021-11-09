import React from "react";
import TextBox from "./TextBox";
import Button from "./Button";

function SignUp() {
  return (
    <div className="register-modal-content">
      <h1>Sign up</h1>
      <form>
        <TextBox
          type="text"
          placeholder="First Name"
          inputName="First Name"
          name="firstname"
        />
        <TextBox
          type="text"
          placeholder="Last Name"
          inputName="Last Name"
          name="lastname"
        />
        <TextBox
          type="text"
          placeholder="Email"
          inputName="Email"
          name="email"
        />
        <TextBox
          type="password"
          placeholder="Password"
          inputName="Password"
          name="password"
        />
        <Button link="#" cName="btn-color" innerText="Sign up" />
      </form>
    </div>
  );
}

export default SignUp;
