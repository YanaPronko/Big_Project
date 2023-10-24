import { RoutePaths } from 'app/config/routeConfig';
import {
  getUserAuthData,
} from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import { AvatarDropdown } from 'features/AvatarDropdown';
import { NotificationButton } from 'features/NotificationButton';
import {
  memo, useCallback, useEffect,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { BtnSize, Button } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar = memo((props: NavBarProps) => {
  const { className, ...otherProps } = props;
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  useEffect(() => {
    if (authData) {
      setIsAuthModal(false);
    }
  }, [authData]);

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
          <NotificationButton />
          <AvatarDropdown />
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
