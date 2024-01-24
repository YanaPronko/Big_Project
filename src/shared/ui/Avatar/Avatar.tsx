import { CSSProperties, memo, useMemo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import { AppImage } from "../AppImage";
import { UserIcon } from "../Icons";
import { Skeleton } from "../Skeleton";

import cls from "./Avatar.module.scss";

interface AvatarProps {
  /**
   * @description additional class.
   */
  className?: string;

  /**
   * @description An alternative text description of the image.
   */
  alt: string;
  /**
   * @description Avatar image source.
   */
  src?: string;
  /**
   * @description Avatar width and height.
   */
  size?: number;

  /**
   * @description Avatar theme.
   */
  fallbackInverted?: boolean;
}

export const Avatar = memo((props: AvatarProps) => {
  const {
    className,
    src,
    alt,
    size = 150,
    fallbackInverted,
    ...otherProps
  } = props;

  const styles = useMemo<CSSProperties>(
    () => ({
      height: size,
      width: size,
    }),
    [size],
  );

  return (
    <AppImage
      style={styles}
      alt={alt}
      src={src}
      className={classNames(cls.avatar, {}, [className])}
      fallback={<Skeleton width={size} height={size} borderRadius="50%" />}
      errorFallback={<UserIcon inverted={fallbackInverted} />}
      {...otherProps}
    />
  );
});
