import React from "react";
import SayHello from "./SayHello";

export default {
    title: "Main/SayHello",
    component: SayHello
}

const Template = (args) => <SayHello {...args} />

export const Primary = Template.bind({});
Primary.args = {
    children: "Let's be internet BFFs"
}