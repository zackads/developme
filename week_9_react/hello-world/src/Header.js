import React, { Component } from "react";

class Header extends Component {
  render() {
    const { children } = this.props;

    return (
      <header className="jumbotron">
        <h1>{children}</h1>
        <p>It's actually amazing</p>
      </header>
    );
  }
}

export default Header;
