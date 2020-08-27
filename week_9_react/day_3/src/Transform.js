/* Create a <Transform transform={ ...your function here... }> component. 
It should accept a function that takes a number and returns a number 
(e.g. a squaring function x => x * x or an increment function x => x + 1). 

The component should have an <input type="number"> and a <p>. When the user types 
into the <input> the <p> should output the result of running the number through 
the transform function. 

Try adding a few <Transform> components to your app with a different function for each one. */

import React, { Component } from "react";

class Transform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      output: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const fn = this.props.function;

    this.setState({
      input: e.currentTarget.value,
      output: fn(Number(e.currentTarget.value)),
    });
  }

  render() {
    return (
      <>
        <h3>Function: {String(this.props.function)}</h3>
        <label>
          Input:
          <input
            onChange={this.handleChange}
            type="number"
            value={this.state.input}
          />
        </label>
        <p>Output: {this.state.output}</p>
      </>
    );
  }
}

Transform.defaultProps = {
  function: (x) => x * 2,
};

export default Transform;
