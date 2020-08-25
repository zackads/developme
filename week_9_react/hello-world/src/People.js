import React from "react";

const People = (props) => (
  <ul>
    {props.names.map((person, index) => (
      <li className="page-item" key={index}>
        {person}
      </li>
    ))}
  </ul>
);

People.defaultProps = {
  names: ["Nothing to see here."],
};

export default People;
