import React from "react";
import TextBox from "./TextBox";
import Button from "./Button";

function SignIn() {
  return (
    <div className="register-modal-content">
      <h1>Sign in</h1>
      <form>
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
        <Button link="#" cName="btn-color" innerText="Sign in" />
      </form>
    </div>
  );
}

export default SignIn;
