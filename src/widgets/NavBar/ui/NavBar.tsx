import {
  FC, useCallback, useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import { getUserAuthData, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = (props) => {
  const { className, ...otherProps } = props;
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const [isAuthModal, setIsAuthModal] = useState(false);
  const dispatch = useDispatch();
  const { setAuthData } = userActions;

  console.log(isAuthModal);

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
      <div
        className={classNames(cls.navBar, {}, [className])}
        {...otherProps}
      >
        <Button
          className={cls.signinBtn}
          theme="clear_inverted"
          onClick={onLogOut}
        >
          {t('vyiti')}
        </Button>
        <LoginModal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)} />
      </div>
    );
  }

  return (
    <div
      className={classNames(cls.navBar, {}, [className])}
      {...otherProps}
    >
      <Button
        className={cls.signinBtn}
        theme="clear_inverted"
        onClick={onShowModal}
      >
        {t('sign-in')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)} />
    </div>
  );
};
