import {
  memo, useCallback, useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector, useStore } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { BtnSize, Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import { getLoginError } from '../../model/selectors/getLoginError';

import { loginByUsername } from '../../model/services/loginByUsername';
import cls from './LoginForm.module.scss';
import { getLoginIsLoading } from 'features/AuthByUserName/model/selectors/getLoginIsLoading';

interface LoginFormProps {
  className?: string;
}

const LoginForm = memo(({ className, ...otherProps }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    store.reducerManager.add('loginForm', loginReducer);
    dispatch({ type: '@INIT loginForm reducer' });

    return () => {
      dispatch(loginActions.resetError());
      store.reducerManager.remove('loginForm');
      dispatch({ type: '@Destroy loginForm reducer' });
    };
  }, [dispatch, store.reducerManager]);

  const { error } = useSelector(getLoginError);
  const { isLoading } = useSelector(getLoginIsLoading);

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

export default LoginForm;
