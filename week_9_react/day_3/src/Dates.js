import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { Alert } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";

class Dates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date1: new Date(),
      date2: new Date(),
    };

    this.handleDate1 = this.handleDate1.bind(this);
    this.handleDate2 = this.handleDate2.bind(this);
  }

  handleDate1(date1) {
    this.setState({
      date1: date1,
    });
  }

  handleDate2(date2) {
    this.setState({
      date2: date2,
    });
  }

  getDaysDifference(date1, date2) {
    return Math.ceil((date2.getTime() - date1.getTime()) / 60 / 60) / 24 / 1000;
  }

  render() {
    let { date1, date2 } = this.state;

    return (
      <>
        <DatePicker selected={date1} onChange={this.handleDate1} />
        <DatePicker selected={date2} onChange={this.handleDate2} />
        <Alert variant="primary">
          {this.getDaysDifference(date1, date2)} days
        </Alert>
      </>
    );
  }
}

export default Dates;
