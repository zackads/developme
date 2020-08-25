import React from "react";
import Stuff from "./Stuff.js";
import Clicked from "./Clicked.js";

const App = () => (
  <React.Fragment>
    <Stuff square={false} />
    <Clicked />
  </React.Fragment>
);

export default App;
