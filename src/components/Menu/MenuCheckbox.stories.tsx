import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import MenuCheckbox, { Props as MenuCheckboxProps } from "./MenuCheckbox";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const menuOptions = [
  { label: "This year", selected: false },
  { label: "This month", selected: true },
  { label: "This week", selected: false },
];

export default {
  title: "Menu",
  component: MenuCheckbox,
  decorators: [
    (Story: any) => (
      <div className="d-flex justify-content-center">{Story()}</div>
    ),
  ],
  argTypes: {
    align: {
      control: "select",
      options: ["start", "center", "end"],
    },
    portal: {
      control: "boolean",
    },
    title: {
      description: "Default menu button text when no option is selected",
    },
    showNumber: {
      description: "Show the number of selected options",
    },
  },
} as ComponentMeta<typeof MenuCheckbox>;

const MenuCheckboxTemplate: ComponentStory<typeof MenuCheckbox> = (
  args: MenuCheckboxProps
) => <MenuCheckbox {...args} />;

export const CheckboxMenu = MenuCheckboxTemplate.bind({});
CheckboxMenu.args = {
  options: menuOptions,
  align: "center",
};

export const CheckboxMenuWithNumber = MenuCheckboxTemplate.bind({});
CheckboxMenuWithNumber.args = {
  options: menuOptions,
  align: "center",
  showNumber: true,
};
