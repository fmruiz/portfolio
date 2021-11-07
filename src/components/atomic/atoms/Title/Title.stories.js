import React from "react";
import Title from "./Title";

export default {
  title: "Main/Title",
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const Large = Template.bind({});
Large.args = {
  text: "Experience",
  size: "50px"
};

export const Medium = Template.bind({});
Medium.args = {
  text: "Experience",
  size: "35px"
};

export const Small = Template.bind({});
Small.args = {
  text: "Experience",
  size: "25px"
};

export const Bold = Template.bind({});
Bold.args = {
  text: "Experience",
  size: "35px",
  bold: true
};

