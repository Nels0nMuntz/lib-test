/// <reference types="react" />
export interface Props {
    show: boolean;
    onHide: () => void;
    bodyChildren: any;
    dialogClassName?: string;
    contentClassName?: string;
    bodyClassName?: string;
}
declare const ModalBasic: ({ show, onHide, bodyChildren, dialogClassName, contentClassName, bodyClassName, }: Props) => JSX.Element;
export default ModalBasic;
