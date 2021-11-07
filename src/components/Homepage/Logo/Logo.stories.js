import React from "react";
import Logo from "./Logo";

export default {
  title: "Main/Logo",
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "FR",
};
