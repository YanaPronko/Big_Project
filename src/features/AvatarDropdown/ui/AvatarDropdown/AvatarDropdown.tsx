import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Dropdown, DropdownItem } from '@/shared/ui/Popups';
import {
  getIsAdmin,
  getIsManager,
  getUserAuthData,
  userActions,
} from '@/entities/User';
import { RoutePaths } from '@/app/config/routeConfig';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { Avatar } from '@/shared/ui/Avatar/Avatar';

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

  const items: DropdownItem[] = useMemo(() => [
    ...(isAdminPanelAvailable ? [
      {
        content: 'Admin Panel',
        href: RoutePaths.admin_panel,
      },
    ] : []),
    {
      content: t('Profile'),
      href: `${RoutePaths.profile}${authData?.id}`,
    },
    {
      content: t('vyiti'),
      onClick: onLogOut,
    },
  ], [t, onLogOut, authData, isAdminPanelAvailable]);

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      items={items}
      direction="bottomL"
      trigger={<Avatar size={30} src={authData.avatar} alt="avatar" />}
    />
  );
});
