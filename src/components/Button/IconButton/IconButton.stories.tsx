import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconButton, { Props } from "./IconButton";

export default {
  title: "Button",
  component: IconButton,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["button", "submit", "reset"],
      },
    },
    src: {
      type: "string",
    },
    width: {
      type: "number",
    },
    height: {
      type: "number",
    },
    disabled: {
      type: "boolean",
    },
    clickHandler: {
      action: "clicked",
    },
  },
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args: Props) => (
  <IconButton {...args} />
);

export const WithIcon = Template.bind({});
WithIcon.args = {
  src: "images/plus-icon.svg",
  width: 24,
  height: 24,
};
