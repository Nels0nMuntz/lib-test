import React, { useEffect, useRef, useState } from "react";
import Stack from "react-bootstrap/Stack";
import styles from "./toolbar.module.scss";
import Typography, { TextType } from "../Typography/Typography";
import colors from "../../styles/colors.module.scss";

export interface Props {
  title: string;
  tabs: string[];
  children?: React.ReactNode;
  onChangeTab?: (tabIndex: number) => void;
}

const Toolbar = ({ title, tabs, children, onChangeTab }: Props) => {
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const handleClick = (tabIndex: number) => {
    setActiveTabIndex(tabIndex);
    if (onChangeTab) {
      onChangeTab(tabIndex);
    }
  };
  useEffect(() => {
    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };
    setTabPosition();
    window.addEventListener("resize", setTabPosition);
    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);
  return (
    <div className={styles.toolbar}>
      <Typography
        text={title}
        element="h3"
        textType={TextType.bodyB4}
        color={colors.brandColorBlack}
        className={styles.toolbarTitle}
      />
      <Stack direction="horizontal" gap={3} className="w-100">
        <div className={styles.tabsNav}>
          <div className={styles.tabItems}>
            {tabs?.map((label, index) => (
              <button
                key={label}
                type="button"
                className={
                  activeTabIndex === index
                    ? [styles.tabButton, styles.tabButtonSelected].join(" ")
                    : styles.tabButton
                }
                onClick={() => handleClick(index)}
                ref={(el) => {
                  tabsRef.current[index] = el;
                }}
              >
                <Typography
                  text={label}
                  textType={TextType.body}
                  element="span"
                  color={
                    activeTabIndex === index
                      ? colors.textColorPrimary
                      : colors.textColorSecondary
                  }
                  className=""
                />
              </button>
            ))}
            <span
              className={styles.underline}
              style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
            />
          </div>
        </div>
        <div className="ms-auto">{children}</div>
      </Stack>
    </div>
  );
};

export default Toolbar;
