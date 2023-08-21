import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = (props) => {
  const { className, ...otherProps } = props;

  return (
    <div className={classNames(cls.navBar, {}, [className])} {...otherProps}>
      <Modal />
    </div>
  );
};
