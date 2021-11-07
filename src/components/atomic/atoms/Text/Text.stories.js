/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Text from "./Text";

export default {
  title: "Main/Text",
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  bold: true,
  size: "20px",
  children:
    "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
};

export const Secondary = Template.bind({});
Secondary.args = {
  bold: false,
  size: "15px",
  children:
    "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
};
