/* eslint-disable max-len */
import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { IconProps } from '@/shared/types/ui';

export const StarIcon = memo((props: IconProps) => {
  const { className, ...otherProps } = props;

  return (
    <svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('', {}, [className])}
      {...otherProps}
    >
      <path
        d="M11.0746 1.633C11.3946 0.789 12.6056 0.789 12.9266 1.633L14.9966 7.367C15.0688 7.55379 15.1959 7.71428 15.3613 7.8273C15.5266 7.94031 15.7223 8.00053 15.9226 8H21.0096C21.9496 8 22.3596 9.17 21.6206 9.743L18.0006 13C17.8384 13.1247 17.7199 13.2975 17.6621 13.4937C17.6042 13.6898 17.61 13.8993 17.6786 14.092L19.0006 19.695C19.3226 20.595 18.2806 21.368 17.4926 20.814L12.5756 17.694C12.4072 17.5757 12.2064 17.5122 12.0006 17.5122C11.7948 17.5122 11.594 17.5757 11.4256 17.694L6.50856 20.814C5.72156 21.368 4.67856 20.594 5.00056 19.695L6.32257 14.092C6.39114 13.8993 6.39692 13.6898 6.33907 13.4937C6.28122 13.2975 6.16272 13.1247 6.00057 13L2.38056 9.743C1.64056 9.17 2.05256 8 2.99056 8H8.07756C8.27786 8.00067 8.47363 7.9405 8.63898 7.82747C8.80433 7.71444 8.93147 7.55387 9.00357 7.367L11.0736 1.633H11.0746Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});
