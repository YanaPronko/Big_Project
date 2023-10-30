/* eslint-disable max-len */
import { memo } from 'react';
import { IconProps } from '@/shared/types/ui';
import { classNames } from '@/shared/lib/classNames/classNames';

export const GridIcon = memo((props: IconProps) => {
  const { className, ...otherProps } = props;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('', {}, [className])}
      {...otherProps}
    >
      <path d="M6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4V4ZM13 13V18H18V13H13ZM6 13V18H11V13H6ZM13 6V11H18V6H13ZM6 6V11H11V6H6Z" />
    </svg>
  );
});
