/// <reference types="react" />
export type MenuOption = {
    label: string;
    selected: boolean;
};
export interface Props {
    options: MenuOption[];
    buttonClassName?: string;
    menuClassName?: string;
    menuItemClassName?: string;
    portal?: boolean | {
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
declare const Menu: ({ options, buttonClassName, menuClassName, menuItemClassName, portal, align, offsetX, offsetY, title, search, onChange, }: Props) => JSX.Element;
export default Menu;
