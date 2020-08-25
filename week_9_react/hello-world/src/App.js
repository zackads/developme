import React from "react";
import Stuff from "./Stuff.js";
import Clicked from "./Clicked.js";
import ToggleText from "./ToggleText.js";

const App = () => (
  <React.Fragment>
    <Stuff square={true} color="purple" />
    <Clicked />
    <ToggleText initial="Hello" alternate="World" />
  </React.Fragment>
);

export default App;
