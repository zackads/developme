import React from "react";

const people = ["Steve Stevington", "Emily Blunt", "Matthew McConaughey"];

const People = () => (
  <ul>
    {people.map((person) => (
      <li className="page-item">{person}</li>
    ))}
  </ul>
);

export default People;
