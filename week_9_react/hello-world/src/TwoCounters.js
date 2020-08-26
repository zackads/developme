import React, { Component } from "react";

class TwoCounters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value1: 0,
      value2: 0,
    };

    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  componentDidMount() {
    document.title = this.state.value1 + this.state.value2;
  }

  componentDidUpdate() {
    document.title = this.state.value1 + this.state.value2;
  }

  handleClick1() {
    this.setState({
      value1: this.state.value1 + 1,
    });
  }

  handleClick2() {
    this.setState({
      value2: this.state.value2 + 1,
    });
  }

  render() {
    const { value1, value2 } = this.state;

    return (
      <div className="jumbotron">
        <p>
          <button onClick={this.handleClick1} className="btn btn-lg btn-danger">
            +
          </button>
          <span className="alert alert-danger mr-2 ml-2">{value1}</span>
        </p>
        <p>
          <button
            onClick={this.handleClick2}
            className="btn btn-lg btn-success"
          >
            +
          </button>
          <span className="alert alert-success mr-2 ml-2">{value2}</span>
        </p>
      </div>
    );
  }
}

export default TwoCounters;
