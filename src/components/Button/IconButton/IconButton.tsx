import React from "react";
import Image from "next/image";
import styles from "./IconButton.module.scss";

export interface Props {
  src: string;
  disabled?: boolean;
  width?: number;
  height?: number;
  className?: string;
  type?: "submit" | "reset" | "button";
  clickHandler?: () => void;
}

const IconButton = ({
  src,
  disabled,
  width = 40,
  height = 40,
  className = "",
  type,
  clickHandler,
}: Props) => (
  <button
    type={type === "submit" ? "submit" : "button"}
    disabled={disabled}
    onClick={clickHandler}
    className={`${className} ${styles.iconButton}`}
  >
    <Image src={src} width={width} height={height} alt="icon button" />
  </button>
);

export default IconButton;
