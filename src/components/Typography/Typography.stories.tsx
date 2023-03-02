import React from "react";
import { ComponentMeta } from "@storybook/react";

import colors from "../../styles/colors.module.scss";
import Typography, { TextType, Props } from "./Typography";

export default {
  title: "Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const Variants = () => (
  <>
    <Typography
      element="h1"
      textType={TextType.pageHeading}
      text="Page Heading"
      color={colors.textColorPrimary}
    />
    <Typography
      element="h1"
      textType={TextType.itemHeading}
      text="Item Heading"
      color={colors.textColorPrimary}
    />
    <Typography
      element="h1"
      textType={TextType.headingH1}
      text="Heading 1"
      color={colors.textColorPrimary}
    />
    <Typography
      element="h2"
      textType={TextType.heading}
      text="Heading 2"
      color={colors.textColorPrimary}
    />
    <Typography
      element="h3"
      textType={TextType.subheading}
      text="Heading 3"
      color={colors.textColorPrimary}
    />
    <Typography
      element="h4"
      textType={TextType.headingH4}
      text="Heading 4"
      color={colors.textColorPrimary}
    />
    <Typography
      element="h5"
      textType={TextType.headingH5}
      text="Heading 5"
      color={colors.textColorPrimary}
    />
    <Typography
      element="h6"
      textType={TextType.headingH6}
      text="Heading 6"
      color={colors.textColorPrimary}
    />
    <Typography
      element="h1"
      textType={TextType.subHeadingH1}
      text="Sub Heading 1"
      color={colors.textColorPrimary}
    />
    <Typography
      element="h2"
      textType={TextType.subHeadingH2}
      text="Sub Heading 2"
      color={colors.textColorPrimary}
    />
    <Typography
      element="h3"
      textType={TextType.subHeadingH3}
      text="Sub Heading 3"
      color={colors.textColorPrimary}
    />
    <Typography
      element="p"
      textType={TextType.body}
      text="Body 1"
      color={colors.textColorPrimary}
    />
    <Typography
      element="p"
      textType={TextType.bodyB1}
      text="Body 2"
      color={colors.textColorPrimary}
    />
    <Typography
      element="p"
      textType={TextType.bodyB3}
      text="Body 3"
      color={colors.textColorPrimary}
    />
    <Typography
      element="p"
      textType={TextType.bodyB4}
      text="Body 4"
      color={colors.textColorPrimary}
    />
    <Typography
      element="p"
      textType={TextType.textButton}
      text="Text Button"
      color={colors.textColorPrimary}
    />
    <Typography
      element="p"
      textType={TextType.mobileButton}
      text="Mobile Button"
      color={colors.textColorPrimary}
    />
    <Typography
      element="p"
      textType={TextType.caption}
      text="Caption"
      color={colors.textColorPrimary}
    />
  </>
);
