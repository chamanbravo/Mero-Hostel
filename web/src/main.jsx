import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <Provider store={store}>
      <React.StrictMode>
        <App />
        <ToastContainer />
      </React.StrictMode>
    </Provider>
  </ChakraProvider>
);
