/* eslint-disable max-len */
import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { IconProps } from "@/shared/types/ui";

import cls from "./SideBarCollapseIcon.module.scss";

/**
 * @description
 * it's wrapper for svg icon
 */

export const SideBarCollapseIconRedesigned = memo((props: IconProps) => {
  const { className, ...otherProps } = props;

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(cls.icon, {}, [className])}
      {...otherProps}
    >
      <path
        d="M10.3624 12.7738C9.96648 13.1588 9.95762 13.7919 10.3426 14.1879L15.2227 19.2064C15.4337 19.4234 15.7193 19.5242 15.9996 19.5075C16.2798 19.5242 16.5654 19.4234 16.7765 19.2064L21.6565 14.1879C22.0415 13.7919 22.0327 13.1588 21.6367 12.7738C21.2408 12.3888 20.6077 12.3976 20.2227 12.7936L15.9996 17.1365L11.7765 12.7936C11.3915 12.3976 10.7584 12.3888 10.3624 12.7738Z"
        fill="currentColor"
      />
    </svg>
  );
});
