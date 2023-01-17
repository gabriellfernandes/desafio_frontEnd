import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Calculator } from "./components/Calculator";
import { Anticipation } from "./components/Anticipation";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Calculator />
      <Anticipation />
    </div>
  );
}

export default App;
