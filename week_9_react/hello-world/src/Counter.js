import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.initial,
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  handleClickIncrement() {
    if (this.state.count < this.props.max) {
      this.setState({
        count: this.state.count + 1,
      });
    }
  }

  handleClickDecrement() {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <p>{this.state.count}</p>
        <button className="btn btn-dark" onClick={this.increase}>
          +
        </button>
        <button className="btn btn-dark" onClick={this.decrease}>
          -
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
