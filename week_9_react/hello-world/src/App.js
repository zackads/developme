import React from "react";
import Stuff from "./Stuff.js";
import Clicked from "./Clicked.js";

const App = () => (
  <React.Fragment>
    <Stuff square={true} color="purple" />
    <Clicked />
  </React.Fragment>
);

export default App;
