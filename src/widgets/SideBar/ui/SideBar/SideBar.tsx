import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { BtnSize, Button } from 'shared/ui/Button/Button';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher/LanguageSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'app/config/routeConfig';
import { MainIcon } from 'shared/ui/MainIcon/MainIcon';
import { AboutIcon } from 'shared/ui/AboutIcon/AboutIcon';
import cls from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = (props) => {
  const { className, ...otherProps } = props;

  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sideBar, { [cls.collappsed]: collapsed }, [
        className,
      ])}
      {...otherProps}
    >
      <Button
        data-testid="toggle"
        className={cls.collapseBtn}
        theme="background_inverted"
        square
        size={BtnSize.L}
        onClick={onToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.links}>
        <AppLink to={RoutePaths.main} theme="inverted">
          <MainIcon className={cls.icon} />
          <span className={cls.link}>
            {t('Main')}
          </span>
        </AppLink>
        <AppLink to={RoutePaths.about} theme="inverted">
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>
            {t('About us')}
          </span>
        </AppLink>
      </div>
      <div
        className={classNames(cls.switchers, { [cls.collappsed]: collapsed })}
      >
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  );
};
