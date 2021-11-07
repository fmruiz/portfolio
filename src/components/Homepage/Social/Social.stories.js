import React from "react";
import { Social } from "./Social";

export default {
  title: "Main/Social",
  component: Social,
};

const Template = (args) => <Social {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "black",
};
