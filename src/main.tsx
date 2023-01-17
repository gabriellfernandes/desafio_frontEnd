import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HomeContextComponent } from "./context/Home";
import "./index.css";
import { GlobalStyles, ResetCSS } from "./styles/resetStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ResetCSS />
    <GlobalStyles />
    <HomeContextComponent>
      <App />
    </HomeContextComponent>
  </React.StrictMode>
);
