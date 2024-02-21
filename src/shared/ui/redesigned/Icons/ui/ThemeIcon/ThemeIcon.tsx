/* eslint-disable max-len */
import { FC } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { IconProps } from "@/shared/types/ui";

import cls from "./ThemeIcon.module.scss";

/**
 * @description
 * it's wrapper for svg icon
 */



export const ThemeIconRedesigned: FC<IconProps> = (props) => {
  const { className, inverted, ...otherProps } = props;

  return (
    <svg
      className={classNames(inverted ? cls.inverted : cls.icon, {}, [
        className,
      ])}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M16 26C21.523 26 26 21.523 26 16C26 10.477 21.523 6 16 6C10.477 6 6 10.477 6 16C6 21.523 10.477 26 16 26ZM16 24.5V7.5C18.2543 7.5 20.4163 8.39553 22.0104 9.98959C23.6045 11.5837 24.5 13.7457 24.5 16C24.5 18.2543 23.6045 20.4163 22.0104 22.0104C20.4163 23.6045 18.2543 24.5 16 24.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
