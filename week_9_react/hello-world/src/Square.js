import React, { Component } from "react";

class Square extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boxStyle: {
        backgroundColor: "green",
        width: 200,
        height: 200,
      },
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      boxStyle: {
        backgroundColor:
          this.state.boxStyle.backgroundColor === this.props.color
            ? "green"
            : this.props.color,
        width: this.state.boxStyle.width,
        height: this.state.boxStyle.height,
      },
    });
  }

  render() {
    return (
      <div onClick={this.handleClick} style={this.state.boxStyle} /> // JSX
    );
  }
}

export default Square;
