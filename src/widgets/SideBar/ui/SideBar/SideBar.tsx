import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { BtnSize, Button } from 'shared/ui/Button/Button';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher/LanguageSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { SideBarItemsList } from '../../model/items';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import cls from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export const SideBar = memo((props: SideBarProps) => {
  const { className, ...otherProps } = props;
  const [collapsed, setCollapsed] = useState(false);

  const items = useMemo(() => SideBarItemsList.map((item) => (
    <SideBarItem item={item} collappsed={collapsed} key={item.path} />
  )), [collapsed]);

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
        { items }
      </div>
      <div
        className={classNames(cls.switchers, { [cls.collappsed]: collapsed })}
      >
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  );
});
