/* eslint-disable max-len */
import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { IconProps } from "@/shared/types/ui";

import cls from "./AboutIcon.module.scss";

/**
 * @description
 * it's wrapper for svg icon
 */

export const AboutIconRedesigned = memo((props: IconProps) => {
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
        d="M7.75 8.5C7.75 7.83696 8.01339 7.20107 8.48223 6.73223C8.95107 6.26339 9.58696 6 10.25 6H21.75C22.0783 6 22.4034 6.06466 22.7067 6.1903C23.01 6.31594 23.2856 6.50009 23.5178 6.73223C23.7499 6.96438 23.9341 7.23998 24.0597 7.54329C24.1853 7.84661 24.25 8.1717 24.25 8.5V22.75C24.25 22.9489 24.171 23.1397 24.0303 23.2803C23.8897 23.421 23.6989 23.5 23.5 23.5H10.0354C9.60163 23.5 9.23618 23.9004 9.54289 24.2071C9.73043 24.3946 9.98478 24.5 10.25 24.5H23.5C23.6989 24.5 23.8897 24.579 24.0303 24.7197C24.171 24.8603 24.25 25.0511 24.25 25.25C24.25 25.4489 24.171 25.6397 24.0303 25.7803C23.8897 25.921 23.6989 26 23.5 26H10.25C9.58696 26 8.95107 25.7366 8.48223 25.2678C8.01339 24.7989 7.75 24.163 7.75 23.5V8.5ZM16 12C16.2652 12 16.5196 11.8946 16.7071 11.7071C16.8946 11.5196 17 11.2652 17 11C17 10.7348 16.8946 10.4804 16.7071 10.2929C16.5196 10.1054 16.2652 10 16 10C15.7348 10 15.4804 10.1054 15.2929 10.2929C15.1054 10.4804 15 10.7348 15 11C15 11.2652 15.1054 11.5196 15.2929 11.7071C15.4804 11.8946 15.7348 12 16 12ZM15.25 13.75V18.75C15.25 18.9489 15.329 19.1397 15.4697 19.2803C15.6103 19.421 15.8011 19.5 16 19.5C16.1989 19.5 16.3897 19.421 16.5303 19.2803C16.671 19.1397 16.75 18.9489 16.75 18.75V13.75C16.75 13.5511 16.671 13.3603 16.5303 13.2197C16.3897 13.079 16.1989 13 16 13C15.8011 13 15.6103 13.079 15.4697 13.2197C15.329 13.3603 15.25 13.5511 15.25 13.75Z"
        fill="currentColor"
      />
    </svg>
  );
});
