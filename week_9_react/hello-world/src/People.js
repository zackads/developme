import React from "react";

const people = ["Steve Stevington", "Emily Blunt", "Matthew McConaughey"];

const People = () => (
  <ul>
    {people.map((person, index) => (
      <li className="page-item" key={index}>
        {person}
      </li>
    ))}
  </ul>
);

export default People;
