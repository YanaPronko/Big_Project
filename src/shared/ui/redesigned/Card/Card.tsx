import { HTMLAttributes, ReactNode, memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Card.module.scss";

type CardVariant = "normal" | "outlined" | "light";
type CardPadding = "0" | "8" | "16" | "24";
export type CardBorder = "round" | "small";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @description additional class.
   */
  className?: string;
  /**
   * @description Card content
   */
  children: ReactNode;
  /**
   * @description Card variant. Responsible for card's color and border.
   * @default "normal"
   */
  variant?: CardVariant;
  /**
   * @description Flag to make card width 100%.
   */
  max?: boolean;
  /**
   * @description Card variant. Responsible for card's paddings.
   */
  padding?: CardPadding;
  /**
   * @description Card type. Responsible  for large border-radius.
   */
  borderRadius?: CardBorder;
}

const mapPaddingToClass: Record<CardPadding, string> = {
  "0": "pad_0",
  "8": "pad_8",
  "16": "pad_16",
  "24": "pad_24",
};

export const CardRedesigned = memo((props: CardProps) => {
  const {
    className,
    children,
    max,
    variant = "normal",
    padding = "8",
    borderRadius = "normal",
    ...otherProps
  } = props;

  const paddingClass = mapPaddingToClass[padding];

  return (
    <div
      className={classNames(cls.card, { [cls.max]: max }, [
        className,
        cls[variant],
        cls[paddingClass],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
