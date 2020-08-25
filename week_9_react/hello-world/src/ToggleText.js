import React, { Component } from "react";

class ToggleText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initial: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      initial: !this.state.initial,
    });
  }

  render() {
    return (
      <React.Fragment>
        <p>{this.state.initial ? this.props.initial : this.props.alternate}</p>
        <button className="btn btn-danger" onClick={this.handleClick}>
          Toggle
        </button>
      </React.Fragment>
    );
  }
}

export default ToggleText;
