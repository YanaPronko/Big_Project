import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
  const { className, ...otherProps } = props;

  return (
    <div
      className={classNames(cls.pageLoader, {}, [className])}
      {...otherProps}
    >
      <Loader/>
    </div>
  );
}