import React, { Component } from "react";
import ReactDOM from "react-dom";
import MDEditor from "@uiw/react-md-editor";

class MarkDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      value: value,
    });
  }

  render() {
    const { value } = this.state;
    return (
      <div className="container">
        <MDEditor
          value={value}
          onChange={(value) => this.handleChange(value)}
        />
        <MDEditor.Markdown source={value} />
      </div>
    );
  }
}

export default MarkDown;
