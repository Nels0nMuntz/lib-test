import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Toolbar, { Props } from "./Toolbar";

export default {
  title: "Toolbar",
  component: Toolbar,
  parameters: {
    backgrounds: { default: "light" },
  },
} as ComponentMeta<typeof Toolbar>;

const Template: ComponentStory<typeof Toolbar> = (args: Props) => (
  <Toolbar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Home",
  tabs: ["Overview", "Transactions"],
};
