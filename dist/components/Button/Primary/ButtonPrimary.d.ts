/// <reference types="react" />
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
declare const ButtonPrimary: ({ isLoading, children, disabled, borderButton, styleContainer, styleButton, className, clickHandler, type, }: Props) => JSX.Element;
export default ButtonPrimary;
