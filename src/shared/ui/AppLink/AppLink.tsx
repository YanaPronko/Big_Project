import { memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

type AppLinkTheme = 'primary' | 'inverted';
type AppLinkSize = 'xl' | 'l' | 'm' | 's'

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  size?: AppLinkSize;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to, className, children, theme = 'primary', size = 'm', ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.appLink, {}, [className, cls[theme], cls[size]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
