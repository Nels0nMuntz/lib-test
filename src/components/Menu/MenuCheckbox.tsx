import React, { useState } from "react";
import { Menu as ReactMenu, MenuButton, MenuItem } from "@szhsin/react-menu";
import { v4 } from "uuid";
import Typography, { TextType } from "../Typography/Typography";
import colors from "../../styles/colors.module.scss";
import styles from "./menu.module.scss";

export interface MenuCheckboxOption {
  label: string;
  selected: boolean;
}
interface MenuCheckboxOptionWithId extends MenuCheckboxOption {
  id: string;
}
export interface Props {
  options: MenuCheckboxOption[];
  buttonClassName?: string;
  menuClassName?: string;
  menuItemClassName?: string;
  showNumber?: boolean;
  portal?:
    | boolean
    | {
        target?: Element;
        stablePosition?: boolean;
      };
  align?: "start" | "center" | "end";
  onChange?: (options: MenuCheckboxOption[]) => void;
}

const MenuCheckbox = ({
  options,
  buttonClassName = "",
  menuClassName = "",
  menuItemClassName = "",
  showNumber = false,
  portal = false,
  align = "start",
  onChange,
}: Props) => {
  const mappedOptions = options.map<MenuCheckboxOptionWithId>(
    ({ label, selected }) => ({ id: v4(), label, selected })
  );

  const [filters, setFilters] = useState(mappedOptions);

  const setAccountsFilter = (id: string, selected: boolean) => {
    const newFilters = [
      ...filters.map((option) =>
        option.id === id ? { ...option, selected } : option
      ),
    ];
    if (onChange) {
      const selectedOptions = newFilters
        .filter(({ selected: checked }) => checked)
        .map<MenuCheckboxOption>((option) => ({
          label: option.label,
          selected: option.selected,
        }));
      onChange(selectedOptions);
    }
    setFilters(newFilters);
  };
  const setAllAccountsFilter = (selected: boolean) => {
    if (onChange) {
      const selectedOptions = selected
        ? options.map<MenuCheckboxOption>(({ label }) => ({
            label,
            selected: true,
          }))
        : [];
      onChange(selectedOptions);
    }
    setFilters([...filters.map((option) => ({ ...option, selected }))]);
  };

  const menuPortal = portal === undefined ? false : portal;
  const menuAlign = align || "end";
  const selectedAccounts = filters.filter(({ selected }) => selected);
  const isAllAccountsSelected = selectedAccounts.length === filters.length;
  const isSomeAccountsSelected =
    selectedAccounts.length && selectedAccounts.length < filters.length;

  const getMenuButtonText = () => {
    let text = "";
    if (isAllAccountsSelected) {
      text = "All accounts";
      if (showNumber) {
        text += `(${filters.length})`;
      }
    } else if (selectedAccounts.length === 1) {
      text = selectedAccounts[0].label;
    } else {
      text = "Accounts";
      if (showNumber) {
        text += `(${selectedAccounts.length})`;
      }
    }
    return text;
  };

  return (
    <ReactMenu
      align={menuAlign}
      offsetY={8}
      viewScroll="close"
      portal={menuPortal}
      menuClassName={[menuClassName, styles.menu].join(" ")}
      transition
      menuButton={
        <MenuButton className={[buttonClassName, styles.menuBtn].join(" ")}>
          <Typography
            text={getMenuButtonText()}
            textType={TextType.caption}
            element="span"
            className={styles.menuBtnText}
          />
        </MenuButton>
      }
    >
      <MenuItem
        className={[
          menuItemClassName,
          styles.menuItem,
          styles.menuItemCheckebox,
          styles.menuItemAll,
          isSomeAccountsSelected ? styles.menuItemCancel : "",
          isAllAccountsSelected ? styles.menuItemChecked : "",
        ].join(" ")}
        key="allAccounts"
        type="checkbox"
        checked={isAllAccountsSelected}
        onClick={(e) => {
          e.stopPropagation = true;
          e.keepOpen = true;
          setAllAccountsFilter(isSomeAccountsSelected ? false : !!e.checked);
        }}
      >
        <span className={styles.menuItemStatus} />
        <Typography
          text="All accounts"
          textType={TextType.body}
          element="span"
          className={styles.menuItemText}
        />
      </MenuItem>
      {filters.map(({ id, label, selected }) => (
        <MenuItem
          className={[
            styles.menuItem,
            styles.menuItemCheckebox,
            selected ? styles.menuItemChecked : "",
          ].join(" ")}
          key={id}
          type="checkbox"
          checked={selected}
          onClick={(e) => {
            e.stopPropagation = true;
            e.keepOpen = true;
            setAccountsFilter(id, !!e.checked);
          }}
        >
          <span className={styles.menuItemStatus} />
          <Typography
            text={label}
            textType={TextType.body}
            element="span"
            color={colors.textColorPrimary}
          />
        </MenuItem>
      ))}
    </ReactMenu>
  );
};

export default MenuCheckbox;
