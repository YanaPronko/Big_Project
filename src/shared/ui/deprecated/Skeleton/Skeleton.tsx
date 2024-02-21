import { CSSProperties, memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Skeleton.module.scss";

interface SkeletonProps {
  /**
   * @description additional class.
   */
  className?: string;
  /**
   * @description Skeleton width.
   */
  width?: string | number;
  /**
   * @description Skeleton height.
   */
  height?: string | number;
  /**
   * @description Border radius of skeleton
   */
  borderRadius?: string;
}
/**
 * @deprecated
 * this component deprecated, see in redesigned folder
 */

export const Skeleton = memo((props: SkeletonProps) => {
  const { className, width, height, borderRadius } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius,
  };

  return (
    <div style={styles} className={classNames(cls.skeleton, {}, [className])} />
  );
});
