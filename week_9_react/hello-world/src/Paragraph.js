import React from "react";

const Paragraph = (props) => (
  <main>
    <p className="lead">
      <p>{props.message}</p>
    </p>
  </main>
);

Paragraph.defaultProps = {
  message: "Default message set in a default property woohoo 🥳",
};

export default Paragraph;
