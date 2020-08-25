import React, { Component } from "react";

class RollCall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      index:
        this.state.index < this.props.names.length - 1
          ? this.state.index + 1
          : 0,
    });
  }

  render() {
    let names = this.props.names;
    let index = this.state.index;

    return (
      <React.Fragment>
        <p>{names[index]}</p>
        <button onClick={this.handleClick} className="btn btn-danger">
          Next
        </button>
      </React.Fragment>
    );
  }
}

export default RollCall;
