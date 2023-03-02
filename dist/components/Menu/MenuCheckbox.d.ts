/// <reference types="react" />
export interface MenuCheckboxOption {
    label: string;
    selected: boolean;
}
export interface Props {
    options: MenuCheckboxOption[];
    buttonClassName?: string;
    menuClassName?: string;
    menuItemClassName?: string;
    showNumber?: boolean;
    portal?: boolean | {
        target?: Element;
        stablePosition?: boolean;
    };
    align?: "start" | "center" | "end";
    onChange?: (options: MenuCheckboxOption[]) => void;
}
declare const MenuCheckbox: ({ options, buttonClassName, menuClassName, menuItemClassName, showNumber, portal, align, onChange, }: Props) => JSX.Element;
export default MenuCheckbox;
