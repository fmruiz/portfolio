import React from "react";
import "./styles.css";

export const Social = ({ color, ...props }) => (
  <div className={`social__container`} {...props}>
    <div className={`social__icons__container`}>
        
    </div>

    <div className={`social__mail__container`}>
      <a href={"mailto: x.francoruiz@gmail.com"} className={`${color}`}>
        x.francoruiz@gmail.com
      </a>
    </div>
  </div>
);
