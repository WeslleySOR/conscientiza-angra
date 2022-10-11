import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="flex flex-col">
      <Header />
      <App />
      <Footer />
    </div>
  </React.StrictMode>
);
