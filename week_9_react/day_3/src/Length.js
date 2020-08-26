import React, { Component } from "react";

class Length extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "Test Value",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.currentTarget.value });
  }

  render() {
    return (
      <div className="form-group">
        <label>{this.props.label}</label>
        <input
          onChange={this.handleChange}
          value={this.state.input}
          name={this.props.name}
          className="form-control"
        />
        <p className="form-text text-muted">
          Length: {this.state.input.length} characters
        </p>
      </div>
    );
  }
}

export default Length;
