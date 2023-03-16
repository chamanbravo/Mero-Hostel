import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/user";
import { toggle } from "../../store/register";
import { popupModal } from "../../store/popupModal";
import { backendUrl } from "../../utils/helper";
import "../TextBox.scss";

function SignIn() {
  const dispatch = useDispatch();
  const [user, setLogUser] = useState({ email: "", password: "" });

  const handleChange = (e: {
    preventDefault: () => void;
    target: { name: any; value: any };
  }) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLogUser({
      ...user,
      [name]: value,
    });
  };

  const loginUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(`${backendUrl}/login`, user, { withCredentials: true })
      .then((res) => {
        if (res.data.user) {
          const { _id, firstname, lastname, email, doj, profilePic } =
            res.data.user;
          dispatch(
            setUser({
              id: _id,
              firstName: firstname,
              lastName: lastname,
              email: email,
              doj: doj,
              profilePic: profilePic,
            })
          );
          dispatch(toggle({ toggleState: false }));
        } else {
          dispatch(popupModal({ message: res.data.msg, cName: "red" }));
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
          <h4>Password</h4>
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
        <p
          className="bottom-text"
          onClick={() => dispatch(toggle({ toggleState: true, sign: "up" }))}
        >
          Not a member? <span>Register Now</span>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
