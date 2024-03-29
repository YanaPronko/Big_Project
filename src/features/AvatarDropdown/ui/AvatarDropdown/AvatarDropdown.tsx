import { memo, useCallback, useMemo } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import {
  getIsAdmin,
  getIsManager,
  getUserAuthData,
  userActions,
} from "@/entities/User";
import { getRouteAdmin, getRouteProfile, getRouteSettings } from "@/shared/const/AppRoutes";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localStorage";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ToggleFeatures } from "@/shared/lib/featureFlags";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Avatar } from "@/shared/ui/deprecated/Avatar";
import { Dropdown } from "@/shared/ui/deprecated/Popups";
import { AvatarRedesigned } from "@/shared/ui/redesigned/Avatar";
import {
  DropdownRedesigned,
  DropdownItem,
} from "@/shared/ui/redesigned/Popups";

import cls from './AvatarDropdown.module.scss';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(getIsAdmin);
  const isManager = useSelector(getIsManager);
  const isAdminPanelAvailable = isAdmin || isManager;

  const { setAuthData } = userActions;

  const onLogOut = useCallback(() => {
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    dispatch(setAuthData(undefined));
  }, [dispatch, setAuthData]);

  const items: DropdownItem[] = useMemo(
    () => [
      ...(isAdminPanelAvailable
        ? [
            {
              content: "Admin Panel",
              href: getRouteAdmin(),
            },
          ]
        : []),
      {
        content: t("Profile"),
        href: getRouteProfile(authData ? authData.id : ""),
      },
      {
        content: t("vyiti"),
        onClick: onLogOut,
      },
      {
        content: t('settings'),
        href: getRouteSettings(),
      },
    ],
    [t, onLogOut, authData, isAdminPanelAvailable],
  );

  if (!authData) {
    return null;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <DropdownRedesigned
          className={classNames("", {}, [className])}
          items={items}
          direction="bottomL"
          trigger={
            <AvatarRedesigned size={30} src={authData.avatar} alt="avatar" className={cls.avatarCenter} />
          }
        />
      }
      off={
        <Dropdown
          className={classNames("", {}, [className])}
          items={items}
          direction="bottomL"
          trigger={
            <Avatar
              size={30}
              src={authData.avatar}
              alt="avatar"
              fallbackInverted
            />
          }
        />
      }
    />
  );
});
