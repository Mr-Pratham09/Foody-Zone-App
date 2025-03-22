import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App.jsx";

const Globalstyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
  }
  body {
    min-height: 100vh;
    /* border: 2px solid red; */
    background-color: #323334;
    color: white;
  }
`

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Globalstyle />
    <App />
  </React.StrictMode>
);
