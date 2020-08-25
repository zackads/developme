import React, { Component } from "react";
import Counter from "./Counter.js";

const StepCounter = ({ initial, max, step }) => {
  return <Counter max={max} step={step} initial={initial} />;
};

StepCounter.defaultProps = {
  initial: 50,
  max: 100,
  step: 5,
};

export default StepCounter;
