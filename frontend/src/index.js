import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import registerSlice from "./features/register";
import loggedUser from "./features/user";
import hostHostel from "./features/hostHostel";

const store = configureStore({
  reducer: {
    register: registerSlice,
    user: loggedUser,
    hostHostel: hostHostel,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
