import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = memo((props: PageLoaderProps) => {
  const { className, ...otherProps } = props;

  return (
    <div
      className={classNames(cls.pageLoader, {}, [className])}
      {...otherProps}
    >
      <Loader />
    </div>
  );
});
