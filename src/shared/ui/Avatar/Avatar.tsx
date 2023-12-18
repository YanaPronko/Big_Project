import { CSSProperties, memo, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

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
}

export const Avatar = memo((props:AvatarProps) => {
  const {
    className, src, alt, size = 150, ...otherProps
  } = props;

  const styles = useMemo<CSSProperties>(() => ({
    height: size,
    width: size,
  }), [size]);

  return (
    <img
      style={styles}
      alt={alt}
      src={src}
      className={classNames(cls.avatar, {}, [className])}
      {...otherProps}
    />
  );
});
