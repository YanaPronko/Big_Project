import { ForwardedRef, forwardRef } from "react";

import { Link, LinkProps } from "react-router-dom";

import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./AppLink.module.scss";

type AppLinkTheme = "primary" | "inverted";
type AppLinkSize = "xl" | "l" | "m" | "s";

interface AppLinkProps extends LinkProps {
  className?: string;

  /**
   * @description AppLink theme. Responsible for AppLink's color.
   * @default 'primary'
   */
  theme?: AppLinkTheme;

  /**
   * @description AppLink size. Responsible for AppLink's size.
   * @default "m"
   */
  size?: AppLinkSize;
}

/**
 * @deprecated
 * this component deprecated, see in redesigned folder
 */

export const AppLink = forwardRef(
  (props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    const {
      to,
      className,
      children,
      theme = "primary",
      size = "m",
      ...otherProps
    } = props;

    return (
      <Link
        to={to}
        ref={ref}
        className={classNames(cls.appLink, {}, [
          className,
          cls[theme],
          cls[size],
        ])}
        {...otherProps}
      >
        {children}
      </Link>
    );
  },
);
