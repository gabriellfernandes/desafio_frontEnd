import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GlobalStyles, ResetCSS } from "./styles/resetStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ResetCSS />
    <GlobalStyles />

    <App />
  </React.StrictMode>
);
