import React, { Component } from "react";
import { Button, ProgressBar } from "react-bootstrap";

class name extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 10,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { progress } = this.state;
    if (progress + 10 <= 100) {
      this.setState({
        progress: this.state.progress + 10,
      });
    } else {
    }
  }

  render() {
    const { progress } = this.state;
    return (
      <>
        <ProgressBar now={progress} label={`${progress}%`} />
        <Button
          variant="primary"
          onClick={this.handleClick}
          disabled={progress >= 100}
        >
          More!
        </Button>
      </>
    );
  }
}

export default name;
