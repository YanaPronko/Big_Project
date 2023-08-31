import {
  memo, useCallback, useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { BtnSize, Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className, ...otherProps }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    dispatch(loginActions.resetError());
  }, [dispatch]);

  const {
    error,
    isLoading,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    setUsername(value);
  }, [setUsername]);

  const onChangePassword = useCallback((value: string) => {
    setPassword(value);
  }, [setPassword]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <form
      className={classNames(cls.loginForm, {}, [className])}
      {...otherProps}
    >
      <Text title={t('registration-form')} />
      {error && (<Text text={t('you-enter-invalid-login-or-password')} theme="error" />)}
      <Input
        type="text"
        name="login"
        label={t('vvedite-vashe-imya')}
        autofocus
        value={username}
        onChange={onChangeUsername}
      />
      <Input
        type="text"
        name="password"
        label={t('vvedite-parol')}
        value={password}
        onChange={onChangePassword}
      />
      <Button
        className={cls.loginBtn}
        type="submit"
        theme="clear"
        size={BtnSize.L}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('voiti')}
      </Button>
    </form>
  );
});
