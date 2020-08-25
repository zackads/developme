import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph.js";
import Square from "./Square.js";
import People from "./People.js";

const Stuff = ({ square }) => (
  <React.Fragment>
    <Header>Text as a child! Woop woop</Header>
    <Paragraph>Paragraph text set as a child!</Paragraph>
    {square ? <Square color="blue" /> : null}
    <People
      names={["Steve Stevington", "Emily Blunt", "Matthew McConaughey"]}
    />
  </React.Fragment>
);

Stuff.defaultProperties = {
  square: true,
};

export default Stuff;
