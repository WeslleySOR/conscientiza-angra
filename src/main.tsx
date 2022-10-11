import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";

import { Header } from "./components/Header";
import GlobalContext from "./contexts";
import { MobileMenuContainer } from "./components/MobileMenuContainer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalContext>
      <div className="flex flex-col">
        <Header />
        <div className="flex max-w-[100vw] overflow-x-hidden">
          <MobileMenuContainer />
          <App />
        </div>
      </div>
    </GlobalContext>
  </React.StrictMode>
);
