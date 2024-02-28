import { memo, useMemo, useState } from "react";

import { useSelector } from "react-redux";

import { LanguageSwitcher } from "@/features/LanguageSwitcher";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLogo } from "@/shared/ui/redesigned/AppLogo";
import { ButtonRedesigned } from "@/shared/ui/redesigned/Button";
import { ArrowDownIconRedesigned } from "@/shared/ui/redesigned/Icons";
import { VStack } from "@/shared/ui/redesigned/Stack";

import { getSideBarItemsList } from "../../../model/selectors/getSideBarItemsList";
import { SideBarItem } from "../../SideBarItem/SideBarItem";

import cls from "./SideBarRedesigned.module.scss";

interface SideBarProps {
  className?: string;
}

export const SideBarRedesigned = memo((props: SideBarProps) => {
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
      className={classNames(
        cls.sidebar_redesigned,
        { [cls.collappsed]: collapsed },
        [className],
      )}
      {...otherProps}
    >
      <AppLogo
        className={classNames(cls.appLogo, { [cls.collappsed]: collapsed }, [])}
      />
      <VStack role="navigation" gap="8" className={cls.items} align="center">
        {items}
      </VStack>
      <ButtonRedesigned
        data-testid="toggle"
        className={cls.collapseBtn}
        variant="transparent"
        size="xl"
        onClick={onToggle}
      >
        <ArrowDownIconRedesigned
          className={classNames(cls.arrow, { [cls.collappsed]: collapsed })}
        />
      </ButtonRedesigned>
      <div
        className={classNames(cls.switchers, { [cls.collappsed]: collapsed })}
      >
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </aside>
  );
});
