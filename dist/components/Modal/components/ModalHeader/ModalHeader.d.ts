import React from "react";
export interface Props {
    closeButton?: boolean;
    onHide?: () => void;
    children?: React.ReactNode | null;
    className?: string;
}
declare const ModalHeader: ({ closeButton, onHide, children, className, }: Props) => JSX.Element;
export default ModalHeader;
