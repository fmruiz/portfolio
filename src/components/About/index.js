import React from "react";
import "./styles.css";
// components
import Title from "../atomic/atoms/Title";

const About = () => (
  <div className={"about__container"} id={"about"}>
    <Title size={"42px"} bold>
      About Me
    </Title>
    <div className={"about__subtitle"}>
      Hello, My name is Franco, I'm a multi-tasking human and I enjoy creating
      things that live on internet.
    </div>
    <div className={"about__body__text"}>
      I don't like to define myself by the work I've done. I define myself by
      the work I want to do. Skills can be taught, personality is inherent. I
      prefer to keep learning, continue challenging myself, and do interesting
      things that matter.
    </div>
    <div className={"about__body__text"}>
      I’m passionate, expressive, multi-talented spirit with a natural ability
      to entertain and inspire. I’m never satisfied to just come up with ideas.
      Instead I have an almost impulsive need to act on them.
    </div>
    <div className={"about__body__text"}>
      My abundant energy fuels me in the pursuit of many interests, hobbies and
      areas of study. I’m a fast learner, able to pick up new skills and juggle
      different projects and roles with relative ease.
    </div>
    <div className={"about__body__text"}>
      You can read more about my biography, experience, skills, education and
      much more in the PDF attached bellow:
    </div>
    <div className={"about__resume"}>My resume</div>
  </div>
);

export default About;
