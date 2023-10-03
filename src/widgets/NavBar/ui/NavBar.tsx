import {
  memo, useCallback, useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import { getUserAuthData, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar = memo((props: NavBarProps) => {
  const { className, ...otherProps } = props;
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
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

  if (authData) {
    return (
      <header className={classNames(cls.navBar, {}, [className])} {...otherProps}>
        <Button
          className={cls.signinBtn}
          theme="clear_inverted"
          onClick={onLogOut}
        >
          {t('vyiti')}
        </Button>
        <LoginModal
          isOpen={isAuthModal}
          onClose={() => setIsAuthModal(false)}
        />
      </header>
    );
  }

  return (
    <header className={classNames(cls.navBar, {}, [className])} {...otherProps}>
      <Button
        className={cls.signinBtn}
        theme="clear_inverted"
        onClick={onShowModal}
      >
        {t('sign-in')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)} />
    </header>
  );
});
