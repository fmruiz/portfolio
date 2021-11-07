import React from "react";
import './styles.css'

const Text = ({ children, bold, size, width, ...props }) => (
  <p
    style={{ fontWeight: bold ? "800" : "400", fontSize: size, width: width }}
    className={"text__atom"}
    {...props}
  >
    {children}
  </p>
);

export default Text;
