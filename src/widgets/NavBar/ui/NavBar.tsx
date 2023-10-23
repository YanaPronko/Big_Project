import {
  memo, useCallback, useEffect, useMemo, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { BtnSize, Button } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import {
  getIsAdmin, getIsManager, getUserAuthData, userActions,
} from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'app/config/routeConfig';
import { HStack } from 'shared/ui/Stack';
import { Dropdown, DropdownItem } from 'shared/ui/Popups/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar = memo((props: NavBarProps) => {
  const { className, ...otherProps } = props;
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(getIsAdmin);
  const isManager = useSelector(getIsManager);

  const [isAuthModal, setIsAuthModal] = useState(false);
  const dispatch = useAppDispatch();
  const { setAuthData } = userActions;

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  useEffect(() => {
    if (authData) {
      setIsAuthModal(false);
    }
  }, [authData]);

  const onLogOut = useCallback(() => {
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    dispatch(setAuthData(undefined));
  }, [dispatch, setAuthData]);

  const isAdminPanelAvailable = isAdmin || isManager;

  const items: DropdownItem[] = useMemo(() => [
    ...(isAdminPanelAvailable ? [{
      content: 'Admin Panel',
      href: RoutePaths.admin_panel,
    }] : []),
    {
      content: t('Profile'),
      href: `${RoutePaths.profile}${authData?.id}`,
    },
    {
      content: t('vyiti'),
      onClick: onLogOut,
    },
  ], [t, onLogOut, authData, isAdminPanelAvailable]);

  if (authData) {
    return (
      <header
        className={classNames(cls.navBar, {}, [className])}
        {...otherProps}
      >
        <HStack justify="center" className={cls.logoBlock}>
          <AppLink to={RoutePaths.main} theme="inverted" size="xl">
            {t('pryweb')}
          </AppLink>
        </HStack>
        <HStack gap="16">
          <AppLink to={RoutePaths.article_create} theme="inverted" size="l">
            {t('create-article')}
          </AppLink>
          <Dropdown
            items={items}
            className={cls.dropdown}
            direction="bottomL"
            trigger={<Avatar size={30} src={authData.avatar} alt="avatar" />}
          />
        </HStack>
        <LoginModal
          isOpen={isAuthModal}
          onClose={() => setIsAuthModal(false)}
        />
      </header>
    );
  }

  return (
    <header className={classNames(cls.navBar, {}, [className])} {...otherProps}>
      <HStack justify="center" className={cls.logoBlock}>
        <AppLink to={RoutePaths.main} theme="inverted" size="xl">{t('pryweb')}</AppLink>
      </HStack>
      <Button
        className={cls.signinBtn}
        theme="clear_inverted"
        onClick={onShowModal}
        size={BtnSize.L}
      >
        {t('sign-in')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)} />
    </header>
  );
});
