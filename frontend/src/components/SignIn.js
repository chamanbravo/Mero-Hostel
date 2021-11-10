import React, { useState } from "react";
import "./TextBox.scss";
import axios from "axios";

function SignIn() {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const loginUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login", user, { withCredentials: true })
      .then(() => {});
  };

  return (
    <div className="register-modal-content">
      <h1>Sign in</h1>
      <form action="" onSubmit={(e) => loginUser(e)}>
        <div className="input-field">
          <h4>Email</h4>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <h4>Email</h4>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button className="btn-color" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default SignIn;
