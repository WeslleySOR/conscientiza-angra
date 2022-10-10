import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createGlobalStyle } from "styled-components";
import { Header } from "./components/Header";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #ebf3e7;
  }
  html {
    font-family: "Montserrat", sans-serif;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <App />
  </React.StrictMode>
);
