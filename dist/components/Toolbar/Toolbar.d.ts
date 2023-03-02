import React from "react";
export interface Props {
    title: string;
    tabs: string[];
    children?: React.ReactNode;
    onChangeTab?: (tabIndex: number) => void;
}
declare const Toolbar: ({ title, tabs, children, onChangeTab }: Props) => JSX.Element;
export default Toolbar;
