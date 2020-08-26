// Create a <PasswordStrength> component. It should contain an <input> with the
// type password. The background styling should change depending on the length of
// the password:

// If it's empty the background shouldn't have styling.
// If it's less than 9 it should be red.
// If it's less than 16 it should be orange.
// If it's 16 or more then it should be green.

import React, { Component } from "react";

class PasswordStrength extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  ratePasswordStrength = (string) => {
    if (string.length < 9) {
      return "red";
    }
    if (string.length < 16) {
      return "orange";
    }
    return "green";
  };

  handleChange(e) {
    this.setState({
      input: e.currentTarget.value,
    });
  }

  render() {
    const style = {
      backgroundColor: this.ratePasswordStrength(this.state.input),
    };
    return (
      <div className="form-group">
        <input
          type="password"
          onChange={this.handleChange}
          value={this.state.input}
          name={this.props.name}
          className="form-control"
          style={style}
        />
      </div>
    );
  }
}

export default PasswordStrength;
