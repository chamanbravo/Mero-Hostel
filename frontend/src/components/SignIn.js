import React from "react";
import TextBox from "./TextBox";

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
      </form>
    </div>
  );
}

export default SignIn;
