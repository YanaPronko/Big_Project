/* eslint-disable max-len */
import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { IconProps } from "@/shared/types/ui";

import cls from "./ListIcon.module.scss";
/**
 * @description
 * it's wrapper for svg icon
 */

export const ListIconRedesigned = memo((props: IconProps) => {
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
        d="M8.28572 8C7.57564 8 7 8.51168 7 9.14286C7 9.77404 7.57564 10.2857 8.28572 10.2857H23.7143C24.4244 10.2857 25 9.77404 25 9.14286C25 8.51167 24.4244 8 23.7143 8H8.28572Z"
        fill="currentColor"
      />
      <path
        d="M8.28572 17.1429C7.57564 17.1429 7 16.6312 7 16C7 15.3688 7.57563 14.8571 8.28571 14.8571H23.7143C24.4244 14.8571 25 15.3688 25 16C25 16.6312 24.4244 17.1429 23.7143 17.1429H8.28572Z"
        fill="currentColor"
      />
      <path
        d="M8.28572 24C7.57564 24 7 23.4883 7 22.8571C7 22.226 7.57563 21.7143 8.28571 21.7143H23.7143C24.4244 21.7143 25 22.226 25 22.8571C25 23.4883 24.4244 24 23.7143 24H8.28572Z"
        fill="currentColor"
      />
    </svg>
  );
});
