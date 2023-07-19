import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import './Loader.scss'
interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = (props) => {
  const { className, ...otherProps } = props;

  return (
    <div
      className={classNames("lds-ellipsis", {}, [className])}
      {...otherProps}
    >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  );
}