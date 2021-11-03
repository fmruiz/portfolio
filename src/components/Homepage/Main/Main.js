import React from "react";
import "./styles.css";

export const Main = ({ color, ...props }) => (
  <div className={`main__container`} {...props}>
    <div className={`main__first ${color}`}>
      <h1>
        I'm <span>Franco Ruiz</span>
      </h1>
      <h3>Front-End Engineer</h3>
    </div>
    <div className={"main__second"}></div>
  </div>
);
