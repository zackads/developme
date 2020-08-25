import React from "react";

const Header = ({ children }) => (
  <header className="jumbotron">
    <h1>{children}</h1>
    <p>It's actually amazing</p>
  </header>
);

export default Header;
