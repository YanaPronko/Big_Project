import {
  ImgHTMLAttributes, ReactElement, memo, useLayoutEffect, useState,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement>{
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

export const AppImage = memo((props: AppImageProps) => {
  const {
    className, src, alt = 'image', fallback, errorFallback, ...otherProps
  } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? '';
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading) {
    return fallback;
  }

  if (hasError) {
    return errorFallback;
  }

  return (
    <img
      className={classNames('', {}, [className])}
      src={src}
      alt={alt}
      {...otherProps}
    />
  );
});
