import React from "react";
import "./styles.css";

const Title = ({children, size, bold, ...props }) => (
  <h4
    className={"title__experience"}
    style={{ fontSize: size, fontWeight: bold ? "bold" : "500" }}
    {...props}
  >
    {children}
  </h4>
);

export default Title;
