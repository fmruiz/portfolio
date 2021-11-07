import React from "react";
import "./styles.css";

// component
import SayHello from "./SayHello";

const Footer = () => (
  <div className={"footer__container"} id={"contact"}>
    <SayHello bold>Let's be internet BFFs</SayHello>
    <a
      href={"https://github.com/fmruiz"}
      target={"_blank"}
      rel="noreferrer"
      className={"footer__copyright"}
    >
      © Franco Ruiz. All Rights Reserved
    </a>
  </div>
);

export default Footer;
