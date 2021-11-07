import React from "react";
import "./styles.css";

const Title = ({ text, size, bold, ...props }) => (
  <h4
    className={"title__experience"}
    style={{ fontSize: size, fontWeight: bold ? "bold" : "400" }}
    {...props}
  >
    {text}
  </h4>
);

export default Title;
