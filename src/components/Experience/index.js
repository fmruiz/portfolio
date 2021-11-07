import React from "react";
import './styles.css'

// components
import Title from "../atomic/atoms/Title";
import Text from "../atomic/atoms/Text";
import Divider from "../atomic/atoms/Divider";

const Experience = () => (
  <div className={"experience__container"}>
    <Title size={"42px"} bold>
      Experience
    </Title>
    <div className={"experience__body"}>
      <div className={"experience__item"}>
        <Title size={"25px"}>Front-end Developer - WIP-IT (2021)</Title>
        <Text size={"16px"}>
          - We are an IT startup based in Argentina and the United States
          dedicated to the development of scalable, secure and usable web and
          mobile application software, centered on people.
          <br />- I worked on projects using different technologies and
          methodologies.
          <br />- Technologies: Javascript (ES6+), Typescript, ReactJS, Redux,
          NextJS, CSS, SCSS, Styled Components, Storybooks, Tailwind CSS,
          ChakraUI, Routing, Cypress, etc.
        </Text>
      </div>
        <Divider />
      <div className={"experience__item"}>
        <Title size={"25px"}>Front-end Developer - WIP-IT (2021)</Title>
        <Text size={"16px"}>
          - We are an IT startup based in Argentina and the United States
          dedicated to the development of scalable, secure and usable web and
          mobile application software, centered on people.
          <br />- I worked on projects using different technologies and
          methodologies.
          <br />- Technologies: Javascript (ES6+), Typescript, ReactJS, Redux,
          NextJS, CSS, SCSS, Styled Components, Storybooks, Tailwind CSS,
          ChakraUI, Routing, Cypress, etc.
        </Text>
      </div>
    </div>
  </div>
);

export default Experience;
