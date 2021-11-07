import React from "react";
import Logo from "../Logo";
import './styles.css'

export const Navbar = ({ color, ...props }) => (
  <div className={`navbar__container`} {...props}>
    <div className={"navbar__first"}>
      <Logo>FR</Logo>
    </div>
    <div className={"navbar__second"}>
      <a href="#" className={`${color}`}>
        Home
      </a>
      <a href="#" className={`${color}`}>
        Skills
      </a>
      <a href="#" className={`${color}`}>
        Experience
      </a>
      <a href="#" className={`${color}`}>
        Contact
      </a>
    </div>
  </div>
);
