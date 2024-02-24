/* eslint-disable max-len */
import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { IconProps } from "@/shared/types/ui";

import cls from "./MainIcon.module.scss";
/**
 * @description
 * it's wrapper for svg icon
 */

export const MainIconRedesigned = memo((props: IconProps) => {
  const { className, ...otherProps } = props;

  return (
    <svg
      className={classNames(cls.icon, {}, [
        className,
      ])}
      width="32"
      height="33"
      viewBox="0 0 32 33"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M13.8237 23.9664V19.5316C13.8237 18.9793 14.2714 18.5316 14.8237 18.5316H17.1715C17.7238 18.5316 18.1715 18.9793 18.1715 19.5316V23.9664C18.1715 24.5642 18.6606 25.0533 19.2584 25.0533H22.5193C23.1171 25.0533 23.6062 24.5642 23.6062 23.9664V17.3577C23.6062 16.8054 24.0539 16.3577 24.6062 16.3577H25.454C25.954 16.3577 26.1932 15.7382 25.8127 15.4121L16.7258 7.22737C16.3128 6.8578 15.6824 6.8578 15.2693 7.22737L6.18245 15.4121C5.81288 15.7382 6.04114 16.3577 6.54114 16.3577H7.38895C7.94124 16.3577 8.38895 16.8054 8.38895 17.3577V23.9664C8.38895 24.5642 8.87808 25.0533 9.4759 25.0533H12.7367C13.3346 25.0533 13.8237 24.5642 13.8237 23.9664Z"
        fill="currentColor"
      />
    </svg>
  );
});
