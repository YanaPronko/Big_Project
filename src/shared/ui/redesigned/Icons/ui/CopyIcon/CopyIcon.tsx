/* eslint-disable max-len */
import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { IconProps } from "@/shared/types/ui";

import cls from './CopyIcon.module.scss';

/**
 * @description
 * it's wrapper for svg icon
 */

export const CopyIconRedesigned = memo((props: IconProps) => {
  const { className, ...otherProps } = props;

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(cls.icon, {}, [className])}
      fill="none"
      {...otherProps}
    >
      <path
        d="M10.5294 23C10.1088 23 9.74865 22.853 9.44888 22.559C9.14912 22.265 8.99949 21.912 9 21.5V11H10.5294V21.5H18.9412V23H10.5294ZM13.5882 20C13.1676 20 12.8075 19.853 12.5077 19.559C12.2079 19.265 12.0583 18.912 12.0588 18.5V9.5C12.0588 9.0875 12.2087 8.73425 12.5085 8.44025C12.8082 8.14625 13.1682 7.9995 13.5882 8H20.4706C20.8912 8 21.2514 8.147 21.5511 8.441C21.8509 8.735 22.0005 9.088 22 9.5V18.5C22 18.9125 21.8501 19.2658 21.5504 19.5598C21.2506 19.8538 20.8907 20.0005 20.4706 20H13.5882ZM13.5882 18.5H20.4706V9.5H13.5882V18.5Z"
        fill="currentColor"
      />
    </svg>
  );
});
