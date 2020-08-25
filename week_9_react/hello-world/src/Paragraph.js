import React, { Component } from "react";

class Paragraph extends Component {
  render() {
    const { children } = this.props;

    return <p className="lead">{children}</p>;
  }
}

export default Paragraph;
