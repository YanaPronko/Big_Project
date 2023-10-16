/* eslint-disable max-len */
import { memo } from 'react';
import { IconProps } from 'shared/types/ui';
import { classNames } from 'shared/lib/classNames/classNames';

export const CalendarIcon = memo((props: IconProps) => {
  const { className, ...otherProps } = props;

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('', {}, [className])}
      {...otherProps}
    >
      <path d="M17.9168 3.33333H16.1112V4.44445H17.7779V16.6667H2.22234V4.44445H3.889V3.33333H2.08345C1.95358 3.3355 1.82541 3.36324 1.70626 3.41495C1.58712 3.46666 1.47932 3.54134 1.38904 3.63472C1.29876 3.7281 1.22775 3.83834 1.18009 3.95917C1.13242 4.07999 1.10902 4.20902 1.11123 4.33889V16.7722C1.10902 16.9021 1.13242 17.0311 1.18009 17.1519C1.22775 17.2728 1.29876 17.383 1.38904 17.4764C1.47932 17.5698 1.58712 17.6445 1.70626 17.6962C1.82541 17.7479 1.95358 17.7756 2.08345 17.7778H17.9168C18.0466 17.7756 18.1748 17.7479 18.294 17.6962C18.4131 17.6445 18.5209 17.5698 18.6112 17.4764C18.7015 17.383 18.7725 17.2728 18.8201 17.1519C18.8678 17.0311 18.8912 16.9021 18.889 16.7722V4.33889C18.8912 4.20902 18.8678 4.07999 18.8201 3.95917C18.7725 3.83834 18.7015 3.7281 18.6112 3.63472C18.5209 3.54134 18.4131 3.46666 18.294 3.41495C18.1748 3.36324 18.0466 3.3355 17.9168 3.33333V3.33333Z" />
      <path d="M4.44434 7.77778H5.55545V8.88889H4.44434V7.77778Z" />
      <path d="M7.77783 7.77778H8.88894V8.88889H7.77783V7.77778Z" />
      <path d="M11.1111 7.77778H12.2222V8.88889H11.1111V7.77778Z" />
      <path d="M14.4443 7.77778H15.5554V8.88889H14.4443V7.77778Z" />
      <path d="M4.44434 10.5556H5.55545V11.6667H4.44434V10.5556Z" />
      <path d="M7.77783 10.5556H8.88894V11.6667H7.77783V10.5556Z" />
      <path d="M11.1111 10.5556H12.2222V11.6667H11.1111V10.5556Z" />
      <path d="M14.4443 10.5556H15.5554V11.6667H14.4443V10.5556Z" />
      <path d="M4.44434 13.3333H5.55545V14.4444H4.44434V13.3333Z" />
      <path d="M7.77783 13.3333H8.88894V14.4444H7.77783V13.3333Z" />
      <path d="M11.1111 13.3333H12.2222V14.4444H11.1111V13.3333Z" />
      <path d="M14.4443 13.3333H15.5554V14.4444H14.4443V13.3333Z" />
      <path d="M5.55556 5.55556C5.7029 5.55556 5.84421 5.49702 5.94839 5.39284C6.05258 5.28865 6.11111 5.14734 6.11111 5V1.66667C6.11111 1.51932 6.05258 1.37802 5.94839 1.27383C5.84421 1.16964 5.7029 1.11111 5.55556 1.11111C5.40821 1.11111 5.26691 1.16964 5.16272 1.27383C5.05853 1.37802 5 1.51932 5 1.66667V5C5 5.14734 5.05853 5.28865 5.16272 5.39284C5.26691 5.49702 5.40821 5.55556 5.55556 5.55556Z" />
      <path d="M14.4445 5.55556C14.5918 5.55556 14.7331 5.49702 14.8373 5.39284C14.9415 5.28865 15 5.14734 15 5V1.66667C15 1.51932 14.9415 1.37802 14.8373 1.27383C14.7331 1.16964 14.5918 1.11111 14.4445 1.11111C14.2971 1.11111 14.1558 1.16964 14.0516 1.27383C13.9474 1.37802 13.8889 1.51932 13.8889 1.66667V5C13.8889 5.14734 13.9474 5.28865 14.0516 5.39284C14.1558 5.49702 14.2971 5.55556 14.4445 5.55556Z" />
      <path d="M7.22217 3.33333H12.7777V4.44445H7.22217V3.33333Z" />
    </svg>
  );
});
