import React from "react";

const Header = (props) => (
  <header className="jumbotron">
    <h1>{props.text}</h1>
    <p>It's actually amazing</p>
  </header>
);

export default Header;
