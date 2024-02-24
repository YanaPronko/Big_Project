import { HTMLAttributes, ReactNode, memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Card.module.scss";

type theme = "normal" | "outlined";

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
   * @description Card theme. Responsible for card's color and border.
   * @default "normal"
   */
  theme?: theme;
  /**
   * @description Flag to make card width 100%.
   */
  max?: boolean;
}

/**
 * @deprecated
 * this component deprecated, see in redesigned folder
 */

export const Card = memo((props: CardProps) => {
  const { className, children, max, theme = "normal", ...otherProps } = props;

  return (
    <div
      className={classNames(cls.card, { [cls.max]: max }, [
        className,
        cls[theme],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
