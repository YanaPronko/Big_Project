/* eslint-disable max-len */
import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { IconProps } from '@/shared/types/ui';

/**
 * @description
 * it's wrapper for svg icon
 */

export const ProfileIcon = memo((props: IconProps) => {
  const { className, ...otherProps } = props;

  return (
    <svg
      width="17"
      height="20"
      viewBox="0 0 17 20"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('', {}, [className])}
      {...otherProps}
    >
      <path d="M10.0742 8.27586H14.4815V9.65517H10.0742V8.27586ZM10.0742 4.82759H17V6.2069H10.0742V4.82759ZM10.0742 1.37931H17V2.75862H10.0742V1.37931ZM5.03726 20H2.51879C2.18513 19.9989 1.86541 19.8532 1.62948 19.5948C1.39354 19.3364 1.26055 18.9862 1.25955 18.6207V13.7931C0.92589 13.792 0.606177 13.6463 0.37024 13.3879C0.134303 13.1295 0.00131401 12.7793 0.000317501 12.4138V8.27586C-0.00429592 8.00277 0.0414087 7.73147 0.134699 7.47816C0.22799 7.22486 0.36695 6.99476 0.543274 6.80163C0.719598 6.60849 0.929665 6.45628 1.16092 6.35409C1.39217 6.25191 1.63985 6.20184 1.88917 6.2069H5.66688C5.9162 6.20184 6.16388 6.25191 6.39513 6.35409C6.62639 6.45628 6.83645 6.60849 7.01278 6.80163C7.1891 6.99476 7.32806 7.22486 7.42135 7.47816C7.51464 7.73147 7.56035 8.00277 7.55573 8.27586V12.4138C7.55474 12.7793 7.42175 13.1295 7.18581 13.3879C6.94987 13.6463 6.63016 13.792 6.2965 13.7931V18.6207C6.2955 18.9862 6.16251 19.3364 5.92657 19.5948C5.69064 19.8532 5.37092 19.9989 5.03726 20ZM1.88917 7.58621C1.80517 7.58068 1.72106 7.59473 1.64238 7.62743C1.5637 7.66013 1.49225 7.71074 1.43275 7.77592C1.37325 7.8411 1.32704 7.91936 1.29719 8.00554C1.26733 8.09172 1.2545 8.18385 1.25955 8.27586V12.4138H2.51879V18.6207H5.03726V12.4138H6.2965V8.27586C6.30155 8.18385 6.28872 8.09172 6.25886 8.00554C6.22901 7.91936 6.1828 7.8411 6.1233 7.77592C6.0638 7.71074 5.99235 7.66013 5.91367 7.62743C5.83499 7.59473 5.75088 7.58068 5.66688 7.58621H1.88917ZM3.77802 5.51724C3.27992 5.51724 2.793 5.35545 2.37884 5.05233C1.96468 4.74921 1.64188 4.31837 1.45126 3.8143C1.26064 3.31023 1.21077 2.75556 1.30795 2.22044C1.40512 1.68532 1.64498 1.19378 1.9972 0.807983C2.34941 0.422183 2.79816 0.159449 3.2867 0.0530074C3.77523 -0.0534346 4.28161 0.00119526 4.7418 0.209989C5.20199 0.418782 5.59532 0.772361 5.87206 1.22601C6.14879 1.67967 6.2965 2.21302 6.2965 2.75862C6.2945 3.48958 6.02852 4.18998 5.55665 4.70685C5.08478 5.22372 4.44535 5.51506 3.77802 5.51724ZM3.77802 1.37931C3.52897 1.37931 3.28551 1.46021 3.07843 1.61177C2.87135 1.76333 2.70995 1.97875 2.61464 2.23078C2.51933 2.48282 2.4944 2.76015 2.54298 3.02771C2.59157 3.29527 2.7115 3.54104 2.88761 3.73394C3.06372 3.92684 3.28809 4.05821 3.53236 4.11143C3.77663 4.16465 4.02982 4.13734 4.25991 4.03294C4.49001 3.92854 4.68667 3.75175 4.82504 3.52493C4.96341 3.2981 5.03726 3.03142 5.03726 2.75862C5.03626 2.39314 4.90328 2.04294 4.66734 1.78451C4.4314 1.52607 4.11169 1.3804 3.77802 1.37931Z" />
    </svg>
  );
});
