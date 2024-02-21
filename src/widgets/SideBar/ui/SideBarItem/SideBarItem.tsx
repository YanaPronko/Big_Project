import { memo } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { getUserAuthData } from "@/entities/User";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/deprecated/AppLink";

import { SideBarItemType } from "../../model/types/items";

import cls from "./SideBarItem.module.scss";
import { ToggleFeatures } from "@/shared/lib/featureFlags";
import { AppLinkRedesigned } from "@/shared/ui/redesigned/AppLink";

interface SideBarItemProps {
  item: SideBarItemType;
  collappsed: boolean;
}

export const SideBarItem = memo(({ item, collappsed }: SideBarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <ToggleFeatures feature="isAppRedesigned"
    on={
    <AppLinkRedesigned
      className={classNames(cls.item_redesigned, { [cls.collappsed_redesigned]: collappsed }, [])}
        to={item.path}
        activeClassName={cls.active}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(`${item.text}`)}</span>
    </AppLinkRedesigned>
    }
    off={
      <AppLink
      className={classNames("", { [cls.collappsed]: collappsed }, [])}
      to={item.path}
      theme="inverted"
      size="l"
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(`${item.text}`)}</span>
      </AppLink>
    }
  />);
});
