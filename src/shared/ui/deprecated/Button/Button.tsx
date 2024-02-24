import { HTMLAttributes, memo } from "react";

import { classNames, Mods } from "@/shared/lib/classNames/classNames";

import cls from "./Button.module.scss";

export type BtnTheme =
  | "clear"
  | "clear_inverted"
  | "outline"
  | "background"
  | "background_inverted"
  | "outline_red";

export enum BtnSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

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
  theme?: BtnTheme;

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

/**
 * @deprecated
 * this component deprecated, see in redesigned folder
 */

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = "outline",
    square,
    size = BtnSize.M,
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
        cls[theme],
        cls[size],
        className,
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
