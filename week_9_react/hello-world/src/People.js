import React, { Component } from "react";

class People extends Component {
  render() {
    const { names } = this.props;

    return (
      <ul onClick={this.handleClick}>
        {names.map((person, index) => (
          <li className="page-item" key={index}>
            {person}
          </li>
        ))}
      </ul>
    );
  }

  handleClick = () => console.log("Clicked");
}

// const People = (props) => (
//   <ul onClick={() => console.log("Clicked")}>
//     {props.names.map((person, index) => (
//       <li className="page-item" key={index}>
//         {person}
//       </li>
//     ))}
//   </ul>
// );

People.defaultProps = {
  names: ["Nothing to see here."],
};

export default People;
