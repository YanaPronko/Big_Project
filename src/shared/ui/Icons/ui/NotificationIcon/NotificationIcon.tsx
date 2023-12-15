/* eslint-disable max-len */
import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { IconProps } from '@/shared/types/ui';

import cls from './NorificationIcon.module.scss';

export const NotificationIcon = memo((props: IconProps) => {
  const { className, inverted, ...otherProps } = props;

  return (
    <svg
      className={classNames('', { [cls.inverted]: inverted }, [className])}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path d="M19.7746 12.6157L17.6923 10.7488V8.27574C17.6899 6.56669 16.9808 4.91913 15.702 3.65166C14.4233 2.38418 12.6657 1.58683 10.7692 1.41377V0H9.23077V1.41377C7.33429 1.58683 5.57674 2.38418 4.29798 3.65166C3.01921 4.91913 2.31008 6.56669 2.30769 8.27574V10.7488L0.225385 12.6157C0.0811159 12.745 4.35672e-05 12.9204 0 13.1033V15.1722C0 15.3551 0.0810437 15.5305 0.225302 15.6598C0.369561 15.7892 0.565218 15.8618 0.769231 15.8618H6.15385V16.3977C6.13711 17.2726 6.48108 18.1223 7.11983 18.7839C7.75859 19.4455 8.6472 19.8725 9.61538 19.9831C10.1501 20.0307 10.6901 19.9774 11.2005 19.8266C11.7108 19.6758 12.1804 19.431 12.5789 19.1077C12.9774 18.7845 13.296 18.3901 13.5142 17.9498C13.7325 17.5096 13.8456 17.0333 13.8462 16.5515V15.8618H19.2308C19.4348 15.8618 19.6304 15.7892 19.7747 15.6598C19.919 15.5305 20 15.3551 20 15.1722V13.1033C20 12.9204 19.9189 12.745 19.7746 12.6157ZM12.3077 16.5515C12.3077 17.1002 12.0646 17.6264 11.6318 18.0144C11.199 18.4024 10.612 18.6204 10 18.6204C9.38796 18.6204 8.80099 18.4024 8.36821 18.0144C7.93544 17.6264 7.69231 17.1002 7.69231 16.5515V15.8618H12.3077V16.5515ZM18.4615 14.4825H1.53846V13.3888L3.62077 11.5219C3.76504 11.3926 3.84611 11.2172 3.84615 11.0343V8.27574C3.84615 6.8125 4.4945 5.40919 5.64857 4.37452C6.80264 3.33985 8.3679 2.75858 10 2.75858C11.6321 2.75858 13.1974 3.33985 14.3514 4.37452C15.5055 5.40919 16.1538 6.8125 16.1538 8.27574V11.0343C16.1539 11.2172 16.235 11.3926 16.3792 11.5219L18.4615 13.3888V14.4825Z" />
    </svg>
  );
});
