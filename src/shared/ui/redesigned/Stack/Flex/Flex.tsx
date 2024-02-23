import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Flex.module.scss";

type FlexJustify = "start" | "end" | "between" | "center" | "around" | "evenly";
type FlexAlign = "start" | "end" | "stretch" | "center";
type FlexDirection = "row" | "column" | "columnRev" | "rowRev";
type FlexGap = "4" | "8" | "16" | "32";

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
  stretch: cls.alignStretch,
};

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween,
  around: cls.justifyAround,
  evenly: cls.justifyEvenly,
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
  columnRev: cls.directionColReverse,
  rowRev: cls.directionRowReverse,
};

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32,
};

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface FlexProps extends DivProps {
  /**
   * @description additional class.
   */
  className?: string;
  /**
   * @description Flex content
   */
  children: ReactNode;
  /**
   * @description Justify content css property
   */
  justify?: FlexJustify;
  /**
   * @description Align items css property
   */
  align?: FlexAlign;
  /**
   * @description Flex direction css property
   */
  direction: FlexDirection;
  /**
   * @description Gap between flex items
   */
  gap?: FlexGap;
  /**
   * @description Flag to set width: 100%
   */
  max?: boolean;
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify = "start",
    align = "center",
    direction = "row",
    gap,
    max,
    ...otherProps
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  const mods = {
    [cls.max]: max,
  };

  return (
    <div className={classNames(cls.flex, mods, classes)} {...otherProps}>
      {children}
    </div>
  );
};
