import React, { Component } from "react";

class Adder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      numbers: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.currentTarget.value,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.setState({
      inputValue: "",
      numbers: [...this.state.numbers, this.state.inputValue],
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <input
            onChange={this.handleInputChange}
            type="number"
            value={this.state.inputValue}
          />
          <button>Add</button>
        </form>
        <table>
          <tbody>
            {this.state.numbers.map((number) => {
              return (
                <tr>
                  <td></td>
                  <td> {number}</td>
                </tr>
              );
            })}
            <tr>
              <th>Total</th>
              <th>
                {this.state.numbers.reduce(
                  (sum, number) => sum + Number(number),
                  0
                )}
              </th>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default Adder;
