import React, { Component } from "react";

class CatchMeIfYouCan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonStyle: {
        top: 0,
      },
    };

    this.handleClick = this.handleClick.bind(this);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  handleClick() {
    this.setState({
      buttonStyle: {
        position: "relative",
        top: this.state.buttonStyle.top + this.props.jump,
      },
    });
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        style={this.state.buttonStyle}
        className="btn btn-primary"
      >
        Click me hehe :-)
      </button>
    );
  }
}

CatchMeIfYouCan.defaultProps = {
  jump: 100,
};

export default CatchMeIfYouCan;
