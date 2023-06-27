import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = (props) => {
  const { className, ...otherProps } = props;

  return (
    <div className={classNames(cls.navBar, {}, [className])} {...otherProps}>
      <div className={cls.links}>
        <AppLink to="/" theme="inverted">
          Main
        </AppLink>
        <AppLink to="/about" theme="inverted">
          About us
        </AppLink>
      </div>
    </div>
  );
}