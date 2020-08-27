import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Length from "./Length.js";
import PasswordStrength from "./PasswordStrength.js";
import TempConverter from "./TempConverter.js";
import List from "./List.js";
import Adder from "./Adder.js";
import Transform from "./Transform.js";
import FourOhFour from "./FourOhFour.js";
import Footer from "./Footer.js";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/length">
            <Length />
          </Route>
          <Route exact path="/passwordstrength">
            <PasswordStrength />
          </Route>
          <Route exact path="/tempconverter">
            <TempConverter />
          </Route>
          <Route exact path="/list">
            <List />
          </Route>
          <Route exact path="/adder">
            <Adder />
          </Route>
          <Route exact path="/transform">
            <Transform function={(x) => Math.pow(x, 2)} />
            <Transform function={(x) => Math.pow(x, 7)} />
            <Transform function={(x) => x + x} />
          </Route>
          <FourOhFour />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
