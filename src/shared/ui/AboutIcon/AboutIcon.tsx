/* eslint-disable max-len */
import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { IconProps } from "@/shared/types/ui";

/**
 * @description
 * it's wrapper for svg icon
 */

export const AboutIcon = memo((props: IconProps) => {
  const { className, ...otherProps } = props;

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames("", {}, [className])}
      {...otherProps}
    >
      <path d="M8.33333 6.66667H13.3333V7.77778H8.33333V6.66667Z" />
      <path d="M8.33333 8.88889H13.3333V10H8.33333V8.88889Z" />
      <path d="M8.33333 11.1111H13.3333V12.2222H8.33333V11.1111Z" />
      <path d="M8.33333 13.3333H13.3333V14.4444H8.33333V13.3333Z" />
      <path d="M6.11111 4.44444H7.22222V5.55555H6.11111V4.44444Z" />
      <path d="M6.11111 6.66667H7.22222V7.77778H6.11111V6.66667Z" />
      <path d="M6.11111 8.88889H7.22222V10H6.11111V8.88889Z" />
      <path d="M6.11111 11.1111H7.22222V12.2222H6.11111V11.1111Z" />
      <path d="M6.11111 13.3333H7.22222V14.4444H6.11111V13.3333Z" />
      <path d="M8.33333 4.44444V5.55555H13.1444C12.9258 5.21155 12.7592 4.83714 12.65 4.44444H8.33333Z" />
      <path d="M15.5555 7.34445V17.7778H4.44444V2.22223H12.6556C12.763 1.82984 12.9278 1.45544 13.1444 1.11111H4.44444C4.14975 1.11111 3.86714 1.22818 3.65877 1.43655C3.45039 1.64493 3.33333 1.92754 3.33333 2.22223V17.7778C3.33333 18.0725 3.45039 18.3551 3.65877 18.5635C3.86714 18.7718 4.14975 18.8889 4.44444 18.8889H15.5555C15.8502 18.8889 16.1328 18.7718 16.3412 18.5635C16.5496 18.3551 16.6667 18.0725 16.6667 17.7778V7.5C16.291 7.49855 15.9172 7.44622 15.5555 7.34445V7.34445Z" />
      <path d="M16.6667 6.11111C18.2008 6.11111 19.4444 4.86746 19.4444 3.33333C19.4444 1.79921 18.2008 0.555557 16.6667 0.555557C15.1325 0.555557 13.8889 1.79921 13.8889 3.33333C13.8889 4.86746 15.1325 6.11111 16.6667 6.11111Z" />
    </svg>
  );
});
