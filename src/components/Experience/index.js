import React from "react";
import "./styles.css";

// components
import Title from "../atomic/atoms/Title";
import Text from "../atomic/atoms/Text";
import Divider from "../atomic/atoms/Divider";

const Experience = () => (
  <div className={"experience__container"} id={"experience"}>
    <Title size={"42px"} bold>
      Experience
    </Title>
    <div className={"experience__body"}>
      <div className={"experience__item"}>
        <Title size={"25px"}>Frontend Developer - WIP-IT (2021)</Title>
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
        <Title size={"25px"}>Frontend Team Lead - WIP-IT (2021)</Title>
        <Text size={"16px"}>
          - Lead and organize the effort of Frontend Team.
          <br />- Seek highest quality on the development process.
          <br />- Promote initiatives on research and development for solutions.
          <br />- Help defining and aligning goals.
        </Text>
      </div>
      <Divider />
      <div className={"experience__item"}>
        <Title size={"25px"}>Teaching Assistant - Coderhouse (2021)</Title>
        <Text size={"16px"}>
          - Lead a group of +20 students.
          <br />- Guide students and solve their technical doubts about
          Javascript, JQuery, AJAX.
          <br />- Help during conferences and workshops.
          <br />- Correct challenges proposed in each class.
        </Text>
      </div>
    </div>
  </div>
);

export default Experience;
