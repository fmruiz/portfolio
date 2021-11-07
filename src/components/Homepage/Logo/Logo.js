import React from "react";
import "./styles.css";

const Logo = ({ children, ...props }) => (
  <div className={"logo__container"} {...props}>
    {children}
  </div>
);

export default Logo;
