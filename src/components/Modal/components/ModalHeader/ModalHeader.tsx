import React from "react";
import Stack from "react-bootstrap/Stack";
import IconButton from "../../../Button/IconButton/IconButton";
import styles from "./modalHeader.module.scss";
import close from "../../../../../public/images/close.svg";

export interface Props {
  closeButton?: boolean;
  onHide?: () => void;
  children?: React.ReactNode | null;
  className?: string;
}

const ModalHeader = ({
  closeButton,
  onHide,
  children,
  className = "",
}: Props) => (
  <Stack
    direction="horizontal"
    gap={3}
    className={[className, styles.header].join(" ")}
  >
    {children}
    {!!closeButton && (
      <IconButton src={close} width={10} height={10} clickHandler={onHide} />
    )}
  </Stack>
);

export default ModalHeader;
