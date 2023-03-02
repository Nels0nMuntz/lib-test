import React, { ChangeEvent, useState } from "react";
import {
  Menu as ReactMenu,
  MenuButton,
  MenuChangeEvent,
  MenuItem,
} from "@szhsin/react-menu";
import { v4 } from "uuid";
import Typography, { TextType } from "../Typography/Typography";
import styles from "./menu.module.scss";

export type MenuOption = {
  label: string;
  selected: boolean;
};
interface MenuOptionWithId extends MenuOption {
  id: string;
}
export interface Props {
  options: MenuOption[];
  buttonClassName?: string;
  menuClassName?: string;
  menuItemClassName?: string;
  portal?:
    | boolean
    | {
        target?: Element;
        stablePosition?: boolean;
      };
  offsetX?: number;
  offsetY?: number;
  align?: "start" | "center" | "end";
  title?: string;
  search?: boolean;
  onChange?: (option: MenuOption) => void;
}

const Menu = ({
  options,
  buttonClassName = "",
  menuClassName = "",
  menuItemClassName = "",
  portal = false,
  align = "start",
  offsetX = 0,
  offsetY = 0,
  title = "Open menu",
  search = false,
  onChange,
}: Props) => {
  const mappedOptions = options.map<MenuOptionWithId>(
    ({ label, selected }) => ({ id: v4(), label, selected })
  );
  const selectedOption = mappedOptions.find(({ selected }) => selected) || null;

  const [filters, setFilters] = useState(mappedOptions);
  const [searchResult, setSearchResult] = useState(mappedOptions);
  const [selection, setSelection] = useState<MenuOptionWithId | null>(
    selectedOption
  );
  const [query, setQuery] = useState("");

  const handleSelectionChange = (id: string) => {
    const selected =
      filters.find((option: MenuOptionWithId) => id === option.id) || null;
    setSelection(selected);
    if (selected && onChange) {
      onChange({ label: selected.label, selected: selected.selected });
    }
  };
  const handleQueryChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setQuery(target.value);
    setSearchResult([
      ...filters.filter(({ label }: MenuOptionWithId) =>
        label
          .toLocaleLowerCase()
          .includes(target.value.trim().toLocaleLowerCase())
      ),
    ]);
  };
  const handleMenuChange = (e: MenuChangeEvent) => {
    if (!e.open) {
      setSearchResult(filters);
      setQuery("");
    }
  };
  const handleAddOption = (label: string) => {
    const option: MenuOptionWithId = {
      id: v4(),
      label,
      selected: false,
    };
    setFilters([...filters, option]);
    setSelection(option);
  };

  const menuPortal = portal === undefined ? false : portal;
  const menuAlign = align || "end";
  const menuButtonTitle = selection?.label || title;

  const addItemView = () => {
    const trimedQuery = query.trim();
    const exists = filters.find(
      (filter: MenuOptionWithId) => filter.label === trimedQuery
    );
    if (!search || !trimedQuery || exists) {
      return null;
    }
    return (
      <MenuItem
        className={[
          menuItemClassName,
          styles.menuItem,
          styles.menuItemCreate,
        ].join(" ")}
        onClick={() => handleAddOption(trimedQuery)}
      >
        <Typography
          text={`Create new contact "${query}"`}
          textType={TextType.caption}
          element="span"
          className={styles.menuItemText}
        />
      </MenuItem>
    );
  };

  return (
    <ReactMenu
      align={menuAlign}
      offsetX={offsetX || 0}
      offsetY={offsetY || 8}
      viewScroll="close"
      portal={menuPortal}
      menuClassName={[
        menuClassName,
        styles.menu,
        search ? styles.menuSearch : "",
      ].join(" ")}
      transition
      onMenuChange={handleMenuChange}
      menuButton={
        <MenuButton className={[buttonClassName, styles.menuBtn].join(" ")}>
          <Typography
            text={menuButtonTitle}
            textType={TextType.caption}
            element="span"
            className=""
          />
        </MenuButton>
      }
    >
      <>
        {search && (
          <div className={styles.menuSearch}>
            <input
              type="text"
              placeholder="Select or create a new contact"
              value={query}
              onChange={handleQueryChange}
            />
          </div>
        )}
        {searchResult.map(({ id, label }) => (
          <MenuItem
            className={[menuItemClassName, styles.menuItem].join(" ")}
            key={id}
            onClick={() => handleSelectionChange(id)}
          >
            <Typography
              text={label}
              textType={TextType.body}
              element="span"
              className={styles.menuItemText}
            />
          </MenuItem>
        ))}
        {addItemView()}
      </>
    </ReactMenu>
  );
};

export default Menu;
