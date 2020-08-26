/* Create a <List> component that consists of a <ul>, an <input>, and a 
<button>Add</button>. When you click the "Add" button, whatever is in the 
<input> should get added to the <ul>. */

import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      items: [],
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
      items: [...this.state.items, this.state.inputValue],
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <input
            onChange={this.handleInputChange}
            value={this.state.inputValue}
          />
          <button>Add to list</button>
        </form>
        <ul>
          {this.state.items.map((value) => (
            <li>{value}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default List;
