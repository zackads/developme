import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Initial state
    };

    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent() {
    this.setState({
      // Update state
    });
  }

  render() {
    return (
      <>
        <Link to="/"> Home </Link>
        <Link to="/length"> Length </Link>
        <Link to="/passwordstrength"> PasswordStrength </Link>
        <Link to="/tempconverter"> TempConverter </Link>
        <Link to="/list"> List </Link>
        <Link to="/adder"> Adder </Link>
        <Link to="/transform"> Transform </Link>
      </>
    );
  }
}

export default Footer;
