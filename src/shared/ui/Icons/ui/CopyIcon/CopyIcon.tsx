/* eslint-disable max-len */
import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { IconProps } from '@/shared/types/ui';

/**
 * @description
 * it's wrapper for svg icon
 */

export const CopyIcon = memo((props: IconProps) => {
  const { className, ...otherProps } = props;

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('', {}, [className])}
      fill="none"
      {...otherProps}
    >
      <path
        d="M16.2 5V1H1V16.2H5L16.2 5ZM5.8 5.8V21H21V5.8H5.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});
