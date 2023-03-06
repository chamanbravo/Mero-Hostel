import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import registerSlice from "./features/register";
import loggedUser from "./features/user";
import hostHostel from "./features/hostHostel";
import popupModal from "./features/popupModal";
import "./index.scss";

const store = configureStore({
  reducer: {
    register: registerSlice,
    user: loggedUser,
    hostHostel: hostHostel,
    popupModal: popupModal,
  },
});

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
