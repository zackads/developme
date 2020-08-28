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
import Square from "./Square.js";
import Footer from "./Footer.js";
import StepCounter from "./StepCounter.js";
import Progress from "./Progress.js";
import Dates from "./Dates.js";
import Times from "./Times.js";
import MarkDown from "./MarkDown.js";

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
          {/* <Route path="/square">
            <Square color="pink" />
          </Route> */}
          <Route
            path="/square/:color"
            render={({ match }) => <Square color={match.params.color} />}
          />
          <Route
            path="/steps/:max/:step"
            render={({ match }) => (
              <StepCounter max={match.params.max} step={match.params.step} />
            )}
          />
          <Route path="/">
            {/* <Progress /> */}
            {/* <Dates /> */}
            <Times />
            <MarkDown />
          </Route>
          <FourOhFour />
        </Switch>
        {/* <Footer /> */}
      </>
    </Router>
  );
}

export default App;
