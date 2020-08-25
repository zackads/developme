import React, { Component } from "react";

class Colours extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      index: (this.state.index + 1) % this.props.colors.length,
    });
  }

  render() {
    return (
      <div
        style={{
          width: 200,
          height: 200,
          backgroundColor: this.props.colors[this.state.index],
        }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

Colours.defaultProps = {
  colors: ["#C14412", "#EBB31A", "#8F5318", "#009EAD", "#395967"],
};

export default Colours;
