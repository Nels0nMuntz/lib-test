/// <reference types="react" />
export interface Props {
    src: string;
    disabled?: boolean;
    width?: number;
    height?: number;
    className?: string;
    type?: "submit" | "reset" | "button";
    clickHandler?: () => void;
}
declare const IconButton: ({ src, disabled, width, height, className, type, clickHandler, }: Props) => JSX.Element;
export default IconButton;
