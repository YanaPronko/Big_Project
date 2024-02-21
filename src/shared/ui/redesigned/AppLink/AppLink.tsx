import { ForwardedRef, forwardRef } from "react";

import { LinkProps, NavLink } from "react-router-dom";

import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./AppLink.module.scss";

type AppLinkVariant = "primary" | "red";
type AppLinkSize = "xl" | "l" | "m" | "s";

interface AppLinkProps extends LinkProps {
  className?: string;

  /**
   * @description AppLink theme. Responsible for AppLink's color.
   * @default 'primary'
   */
  variant?: AppLinkVariant;

  /**
   * @description AppLink size. Responsible for AppLink's size.
   * @default "m"
   */
  size?: AppLinkSize;
  /**
   * @description AppLink active class. Responsible for AppLink's active status.
   *
   */
  activeClassName?: string;
}

export const AppLinkRedesigned = forwardRef(
  (props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    const {
      to,
      className,
      children,
      variant = "primary",
      size = "m",
      activeClassName = "",
      ...otherProps
    } = props;

    return (
      <NavLink
        to={to}
        ref={ref}
        className={({ isActive }) =>
          classNames(cls.appLink, { [activeClassName]: isActive }, [
            className,
            cls[variant],
            cls[size],
          ])
        }
        {...otherProps}
      >
        {children}
      </NavLink>
    );
  },
);
