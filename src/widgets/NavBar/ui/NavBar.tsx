import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = (props) => {
  const { className, ...otherProps } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navBar, {}, [className])} {...otherProps}>
      <div className={cls.links}>
        <AppLink to="/" theme="inverted">
          {t('Main')}
        </AppLink>
        <AppLink to="/about" theme="inverted">
          {t('About us')}
        </AppLink>
      </div>
    </div>
  );
};
