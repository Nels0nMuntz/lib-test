/// <reference types="react" />
export declare enum TextType {
    pageHeading = "page_heading",
    itemHeading = "item_heading",
    heading = "heading_h2",
    headingH4 = "heading_h4",
    headingH5 = "heading_h5",
    subheading = "heading_h3",
    subHeadingH1 = "sub_heading_h1",
    subHeadingH2 = "sub_heading_h2",
    subHeadingH3 = "sub_heading_h3",
    body = "body_b2",
    bodyB1 = "body_b1",
    bodyB3 = "body_b3",
    bodyB4 = "body_b4",
    mobileButton = "mobile_button",
    textButton = "text_button",
    caption = "caption",
    headingH1 = "heading_h1",
    headingH6 = "heading_h6"
}
export interface Props {
    text: string | number;
    textType: TextType;
    element: string;
    color?: string;
    className?: string;
    [x: string]: any;
}
declare const Typography: ({ text, textType, element, color, className, ...otherProps }: Props) => JSX.Element;
export default Typography;
