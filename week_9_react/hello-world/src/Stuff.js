import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph.js";
import Square from "./Square.js";
import People from "./People.js";

const Stuff = () => (
  <React.Fragment>
    <Header text="Text in a prop!" />
    <Paragraph />
    <Square color="blue" />
    <People
      names={["Steve Stevington", "Emily Blunt", "Matthew McConaughey"]}
    />
  </React.Fragment>
);

export default Stuff;
