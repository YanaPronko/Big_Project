import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Text.module.scss";

export type TextVariant = "primary" | "error" | "accent";
export type TextAlign = "left" | "right" | "center";
export type TextSize = "xl" | "l" | "m" | "s";

type HeaderTagType = "h1" | "h2" | "h3" | "h4";

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  xl: "h1",
  l: "h2",
  m: "h3",
  s: "h4",
};

interface TextProps {
  /**
   * @description additional class.
   */
  className?: string;
  /**
   * @description The text of the title
   */
  title?: string;
  /**
   * @description The text to display
   */
  text?: string;
  /**
   * @description The theme of the text. Changes the color
   * @default TextVariant = 'primary'
   */
  variant?: TextVariant;
  /**
   * @description The text alignment
   */
  align?: TextAlign;
  /**
   * @description The size of the text
   * @default "m"
   */
  size?: TextSize;
}

export const TextRedesigned = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    variant = "primary",
    align = "left",
    size = "m",
    ...otherProps
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div
      className={classNames(cls.textWrapper, {}, [
        className,
        cls[variant],
        cls[align],
        cls[size],
      ])}
      {...otherProps}
    >
      {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
