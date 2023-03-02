import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button, { Props } from "./ButtonPrimary";

export default {
  title: "Button",
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["button", "submit", "reset"],
      },
    },
    disabled: {
      type: "boolean",
    },
    borderButton: {
      type: "boolean",
    },
    isLoading: {
      type: "boolean",
    },
    clickHandler: {
      action: "clicked",
    },
  },
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: Props) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  type: "button",
  disabled: false,
  isLoading: false,
  borderButton: false,
  children: "Primary",
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...Primary.args,
  borderButton: true,
  children: "Outlined",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
  children: "Disabled",
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  ...Primary.args,
  isLoading: true,
};
