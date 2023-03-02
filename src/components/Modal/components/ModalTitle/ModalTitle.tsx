import React from "react";
import Typography, { TextType } from "../../../Typography/Typography";
import colors from "../../../../styles/colors.module.scss";

export interface Props {
  children: string;
  className?: string;
}

const ModalTitle = ({ children, className = "" }: Props) => (
  <Typography
    text={children}
    textType={TextType.headingH5}
    element="h4"
    color={colors.textColorPrimary}
    className={className}
  />
);

export default ModalTitle;
