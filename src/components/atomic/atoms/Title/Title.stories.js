import React from "react";
import Title from "./Title";

export default {
  title: "Main/Title",
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const Large = Template.bind({});
Large.args = {
  children: "Experience",
  size: "50px"
};

export const Medium = Template.bind({});
Medium.args = {
  children: "Experience",
  size: "35px"
};

export const Small = Template.bind({});
Small.args = {
  children: "Experience",
  size: "25px"
};

export const Bold = Template.bind({});
Bold.args = {
  children: "Experience",
  size: "35px",
  bold: true
};

