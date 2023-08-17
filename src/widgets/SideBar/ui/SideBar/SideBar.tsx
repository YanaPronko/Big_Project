import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher/LanguageSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import cls from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = (props) => {
  const { className, ...otherProps } = props;

  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

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
        className={cls.color}
        theme="clear"
        onClick={onToggle}
      >
        {t('Toggle')}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
