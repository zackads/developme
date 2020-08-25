import React from "react";
import Stuff from "./Stuff.js";
import Clicked from "./Clicked.js";
import ToggleText from "./ToggleText.js";
import Counter from "./Counter.js";
import StepCounter from "./StepCounter.js";

const App = () => (
  <React.Fragment>
    <Stuff square={true} color="purple" />
    <Clicked />
    <ToggleText initial="Hello" alternate="World" />
    <Counter initial={50} max={100} />
    <StepCounter />
  </React.Fragment>
);

export default App;
