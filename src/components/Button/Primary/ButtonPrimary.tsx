import React from "react";
import styles from "./ButtonPrimary.module.scss";

export interface Props {
  children: any;
  isLoading?: boolean;
  disabled?: boolean;
  borderButton?: boolean;
  styleContainer?: any;
  styleButton?: any;
  className?: string;
  type?: "submit" | "reset" | "button";
  clickHandler?: () => void;
}

const ButtonPrimary = ({
  isLoading,
  children,
  disabled,
  borderButton,
  styleContainer,
  styleButton,
  className = "",
  clickHandler,
  type,
}: Props) => {
  const isDisabled = isLoading || disabled;
  const isBorderd = !isDisabled && borderButton;
  return (
    <div
      className={`${className} ${styles.container}`}
      style={styleContainer || null}
    >
      <button
        type={type === "submit" ? "submit" : "button"}
        disabled={disabled}
        onClick={clickHandler}
        className={[
          isDisabled ? styles.disabled : "",
          isBorderd ? styles.borderButton : styles.hover,
        ].join(" ")}
        style={styleButton || null}
      >
        {isLoading ? (
          <span
            className="spinner-border spinner-border-sm text-light"
            style={{ width: "1.5rem", height: "1.5rem" }}
            role="status"
            aria-hidden="true"
          />
        ) : (
          children
        )}
      </button>
    </div>
  );
};

export default ButtonPrimary;
