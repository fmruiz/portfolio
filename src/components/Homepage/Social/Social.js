import React from "react";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Linkedin = () => <FontAwesomeIcon icon={faLinkedin} />;
const Github = () => <FontAwesomeIcon icon={faGithub} />;
const Twitter = () => <FontAwesomeIcon icon={faTwitter} />;

export const Social = ({ color, ...props }) => (
  <div className={`social__container`} {...props}>
    <div className={`social__icons__container`}>
      <a href={"https://www.linkedin.com/in/francomruiz/"}>
        <Linkedin />
      </a>
      <a href={"https://github.com/fmruiz"}>
        <Github />
      </a>
      <a href={"https://twitter.com/francoRuiz_"}>
        <Twitter />
      </a>
    </div>

    <div className={`social__mail__container`}>
      <a href={"mailto: x.francoruiz@gmail.com"} className={`${color}`}>
        x.francoruiz@gmail.com
      </a>
    </div>
  </div>
);
