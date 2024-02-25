import { HTMLAttributes, memo } from "react";

import { classNames, Mods } from "@/shared/lib/classNames/classNames";

import cls from "./Button.module.scss";

export type BtnVariant = "clear" | "outline" | "filled" | "transparent";

export type BtnSize = "m" | "l" | "xl";

export type BtnType = "button" | "submit" | "reset";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * @description additional class.
   */
  className?: string;

  /**
   * @description Button theme. Responsible for button's color and border.
   * @default "outline"
   */
  variant?: BtnVariant;

  /**
   * @description Flag to make button squared.
   */
  square?: boolean;
  /**
   * @description Button size. Responsible for button's text size.
   * @default BtnSize.M
   */
  size?: BtnSize;
  /**
   * @description Responsible for button's type.
   * @default type="button"
   */
  type?: BtnType;
  /**
   * @description Flag to disable button.
   */
  disabled?: boolean;
  /**
   * @description Flag to make button's width 100%.
   */
  fullWidth?: boolean;
}

export const ButtonRedesigned = memo((props: ButtonProps) => {
  const {
    className,
    children,
    variant = "outline",
    square,
    size = "m",
    fullWidth,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.fullWidth]: fullWidth,
  };

  return (
    <button
      type="button"
      className={classNames(cls.button, mods, [
        cls[variant],
        cls[size],
        className,
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
