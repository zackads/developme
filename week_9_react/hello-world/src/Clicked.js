import React, { Component } from "react";

class Clicked extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }

  handleClick = () => {
    console.log("Clicked!");
    this.setState({ clicked: true });
  };

  render() {
    return (
      <p onClick={this.handleClick}>
        {this.state.clicked ? "Clicked" : "Not clicked"}
      </p>
    );
  }
}

export default Clicked;
