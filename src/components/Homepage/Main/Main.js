import React from "react";
import Typewriter from "typewriter-effect";
import "./styles.css";

export const Main = ({ color, ...props }) => {
  return (
    <div className={`main__container`} {...props}>
      <div className={`main__first ${color}`}>
        <div className={"main__text"}>
          <div className={"name__text"}>
          <span>I'm</span> 
          <h1 className={"h1__main"}>Franco Ruiz.</h1>
          </div>
          <h4 className={"h4__main"}>I build things for the web.</h4>
        </div>
        <h3>
          I'm a Frontend Engineer specializing in building exceptional digital
          experiences. Currently, I'm focused on learning on studying new technologies.
        </h3>
      </div>
      <div className={"main__second"}></div>
    </div>
  );
};
