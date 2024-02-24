import { memo, useState } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLogo } from "@/shared/ui/AppLogo";

import cls from "./SideBarRedesigned.module.scss";

interface SideBarProps {
  className?: string;
}

export const SideBarRedesigned = memo((props: SideBarProps) => {
  const { className, ...otherProps } = props;
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <aside
      data-testid="sidebar"
      className={classNames(
        cls.sidebar_redesigned,
        { [cls.collappsed]: collapsed },
        [className],
      )}
      {...otherProps}
    >
      <AppLogo className={classNames(cls.appLogo, {}, [className])} />
    </aside>
  );
});
