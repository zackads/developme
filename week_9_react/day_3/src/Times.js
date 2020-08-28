import React, { Component } from "react";
import Timekeeper from "react-timekeeper";
import Alert from "react-bootstrap/Alert";

class Times extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time1: "10:30",
      time2: "14:30",
      message: "Not same!",
      alertVariant: "danger",
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange1(TimeOutput) {
    this.setState({
      time1: TimeOutput,
    });
    this.setMessage();
  }

  handleChange2(TimeOutput) {
    this.setState({
      time2: TimeOutput,
    });
    this.setMessage();
  }

  setMessage() {
    if (this.state.time1 === this.state.time2) {
      this.setState({
        message: "Same!",
        alertVariant: "success",
      });
    } else {
      this.setState({
        message: "Not same!",
        alertVariant: "danger",
      });
    }
  }

  render() {
    return (
      <>
        <Timekeeper
          onChange={(newTime) => this.handleChange1(newTime.formatted24)}
          time={this.state.time1}
        />
        <Timekeeper
          onChange={(newTime) => this.handleChange2(newTime.formatted24)}
          time={this.state.time2}
        />
        <Alert variant={this.state.alertVariant}>{this.state.message}</Alert>
      </>
    );
  }
}

export default Times;
