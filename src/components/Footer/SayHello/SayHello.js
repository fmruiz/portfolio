import React from "react";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";

const Linkedin = () => <FontAwesomeIcon icon={faLinkedin} />;
const Github = () => <FontAwesomeIcon icon={faGithub} />;
const Twitter = () => <FontAwesomeIcon icon={faTwitter} />;
const Telegram = () => <FontAwesomeIcon icon={faTelegramPlane} />;

const SayHello = ({ children, bold, ...props }) => (
  <div className={"sayhello__container"} {...props}>
    <div
      className={"sayhello__text"}
      style={{ fontWeight: bold ? "bold" : 400 }}
    >
      {children}
    </div>
    <div className={"sayhello__logos"}>
      <a
        href={"https://www.linkedin.com/in/francomruiz/"}
        target={"_blank"}
        rel="noreferrer"
      >
        <Linkedin />
      </a>
      <a href={"https://t.me/x_francoruiz"} target={"_blank"} rel="noreferrer">
        <Telegram />
      </a>
      <a href={"https://github.com/fmruiz"} target={"_blank"} rel="noreferrer">
        <Github />
      </a>
      <a
        href={"https://twitter.com/francoRuiz_"}
        target={"_blank"}
        rel="noreferrer"
      >
        <Twitter />
      </a>
    </div>
  </div>
);

export default SayHello;
