import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.initial,
    };

    this.handleClickIncrement = this.handleClickIncrement.bind(this);
    this.handleClickDecrement = this.handleClickDecrement.bind(this);
  }

  handleClickIncrement() {
    if (this.state.count < this.props.max) {
      this.setState({
        count: this.state.count + this.props.step,
      });
    }
  }

  handleClickDecrement() {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - this.props.step,
      });
    }
  }

  render() {
    return (
      <>
        <div className="card">
          <p>{this.state.count}</p>
          <button className="btn btn-dark" onClick={this.handleClickIncrement}>
            +
          </button>
          <button className="btn btn-dark" onClick={this.handleClickDecrement}>
            -
          </button>
        </div>
      </>
    );
  }
}

Counter.defaultProps = {
  step: 1,
};

export default Counter;
