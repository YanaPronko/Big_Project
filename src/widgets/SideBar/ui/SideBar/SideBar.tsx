import { memo, useMemo, useState } from "react";

import { useSelector } from "react-redux";

import { LanguageSwitcher } from "@/features/LanguageSwitcher";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { classNames } from "@/shared/lib/classNames/classNames";
import { BtnSize, Button } from "@/shared/ui/deprecated/Button";

import { getSideBarItemsList } from "../../model/selectors/getSideBarItemsList";
import { SideBarItem } from "../SideBarItem/SideBarItem";

import cls from "./SideBar.module.scss";

interface SideBarProps {
  className?: string;
}

export const SideBar = memo((props: SideBarProps) => {
  const { className, ...otherProps } = props;
  const [collapsed, setCollapsed] = useState(false);
  const SideBarItemsList = useSelector(getSideBarItemsList);

  const items = useMemo(
    () =>
      SideBarItemsList.map((item) => (
        <SideBarItem item={item} collappsed={collapsed} key={item.path} />
      )),
    [collapsed, SideBarItemsList],
  );

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <aside
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
        {collapsed ? ">" : "<"}
      </Button>
      <nav className={cls.links}>{items}</nav>
      <div
        className={classNames(cls.switchers, { [cls.collappsed]: collapsed })}
      >
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </aside>
  );
});
