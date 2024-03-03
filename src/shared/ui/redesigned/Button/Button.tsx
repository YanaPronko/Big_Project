import { HTMLAttributes, memo, ReactNode } from "react";

import { classNames, Mods } from "@/shared/lib/classNames/classNames";

import cls from "./Button.module.scss";

export type BtnVariant = "clear" | "outline" | "filled" | "transparent";

export type BtnColor = "normal" | "success" | "error";

export type BtnSize = "m" | "l" | "xl";

export type BtnType = "button" | "submit" | "reset";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * @description additional class.
   */
  className?: string;

  /**
   * @description Button variant. Responsible for button's  border.
   * @default "outline"
   */
  variant?: BtnVariant;

  /**
   * @description Button color. Responsible for button's color and border.
   * @default "normal"
   */
  color?: BtnColor;
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
  /**
   * @description element(icon) in left side
   */
  addonLeft?: ReactNode;
  /**
   * @description element(icon) in right side
   */
  addonRight?: ReactNode;
}

export const ButtonRedesigned = memo((props: ButtonProps) => {
  const {
    className,
    children,
    variant = "outline",
    color = 'normal',
    square,
    size = "m",
    fullWidth,
    addonLeft,
    addonRight,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.fullWidth]: fullWidth,
    [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
  };

  return (
    <button
      type="button"
      className={classNames(cls.button, mods, [
        cls[variant],
        cls[size],
        cls[color],
        className,
      ])}
      {...otherProps}
    >
      {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
      {children}
      {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
    </button>
  );
});
