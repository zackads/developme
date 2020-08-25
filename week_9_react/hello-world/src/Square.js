import React from "react";

const Square = (props) => {
  const boxStyle = {
    width: "200px",
    height: "200px",
    backgroundColor: props.color,
  };

  return <div style={boxStyle} />;
};

Square.defaultProps = {
  color: "red",
};

export default Square;
