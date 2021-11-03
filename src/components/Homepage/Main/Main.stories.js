import React from "react";
import { Main } from "./Main";

export default {
  title: "Main/Main",
  component: Main,
};

const Template = (args) => <Main {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "black",
};
