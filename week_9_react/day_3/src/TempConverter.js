import React, { Component } from "react";

class TempConverter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      celsius: "",
      fahrenheit: "",
    };

    this.handleChangeCelsius = this.handleChangeCelsius.bind(this);
    this.handleChangeFahrenheit = this.handleChangeFahrenheit.bind(this);
  }

  convertFtoC = (f) => ((f - 32) * 5) / 9;

  convertCtoF = (c) => (c / 5) * 9 + 32;

  handleChangeCelsius(e) {
    const value = e.currentTarget.value;
    this.setState({
      celsius: value,
      fahrenheit: this.convertCtoF(value),
    });
  }

  handleChangeFahrenheit(e) {
    const value = e.currentTarget.value;
    this.setState({
      fahrenheit: value,
      celsius: this.convertFtoC(value),
    });
  }

  render() {
    return (
      <form className="form-group">
        <input
          type="number"
          className="form-control"
          onChange={this.handleChangeCelsius}
          value={this.state.celsius}
        />
        <input
          type="number"
          className="form-control"
          onChange={this.handleChangeFahrenheit}
          value={this.state.fahrenheit}
        />
      </form>
    );
  }
}

export default TempConverter;
