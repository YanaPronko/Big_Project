import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import "./Loader.scss";

interface LoaderProps {
  /**
   * @description additional class.
   */
  className?: string;
}

/**
 * @deprecated
 * this component deprecated, see in redesigned folder
 */

export const Loader = memo((props: LoaderProps) => {
  const { className, ...otherProps } = props;

  return (
    <div
      className={classNames("lds-ellipsis", {}, [className])}
      {...otherProps}
    >
      <div />
      <div />
      <div />
      <div />
    </div>
  );
});
