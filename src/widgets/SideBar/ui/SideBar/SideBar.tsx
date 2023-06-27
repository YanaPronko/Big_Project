import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import cls from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = (props) => {
  const { className, ...otherProps } = props;

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  }

  return (
    <div
      className={classNames(cls.sideBar, {[cls.collappsed]: collapsed}, [className])}
      {...otherProps}
    >
      <button onClick={onToggle}>Toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
      </div>
    </div>
  );
}