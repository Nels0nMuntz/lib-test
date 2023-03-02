import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Menu, { Props as MenuProps } from "./Menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const menuOptions = [
  { label: "This year", selected: false },
  { label: "This month", selected: true },
  { label: "This week", selected: false },
];

export default {
  title: "Menu",
  component: Menu,
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
  },
} as ComponentMeta<typeof Menu>;

const MenuTemplate: ComponentStory<typeof Menu> = (args: MenuProps) => (
  <Menu {...args} />
);

export const Default = MenuTemplate.bind({});
Default.args = {
  options: menuOptions,
};

export const WithSearch = MenuTemplate.bind({});
WithSearch.args = {
  options: menuOptions,
  search: true,
};

export const WithoutSelectedOption = MenuTemplate.bind({});
WithoutSelectedOption.args = {
  options: menuOptions.map((option) => ({ ...option, selected: false })),
};
