import React from "react";
import "./App.css";
import Length from "./Length.js";
import PasswordStrength from "./PasswordStrength.js";
import TempConverter from "./TempConverter.js";
import List from "./List.js";
import Adder from "./Adder.js";
import Transform from "./Transform.js";

function App() {
  return (
    <>
      <Transform function={(x) => Math.pow(x, 2)} />
      <Transform function={(x) => Math.pow(x, 7)} />
      <Transform function={(x) => x + x} />
    </>
  );
}

export default App;
