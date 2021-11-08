import React from "react";
import './styles.css'
// component
import Logo from "../Logo";

export const Navbar = ({ color, ...props }) => (
  <div className={`navbar__container`} {...props}>
    <div className={"navbar__first"}>
      <Logo>FR</Logo>
    </div>
    <div className={"navbar__second"}>
      <a href="#about" className={`${color}`}>
        About
      </a>
      <a href="#experience" className={`${color}`}>
        Experience
      </a>
      <a href="#contact" className={`${color}`}>
        Contact
      </a>
    </div>
  </div>
);
