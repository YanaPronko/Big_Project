import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { BtnSize, Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className, ...otherProps } = props;
  const { t } = useTranslation();

  return (
    <form
      className={classNames(cls.loginForm, {}, [className])}
      {...otherProps}
    >
      <Input type="text" name="login" label={t('vvedite-vashe-imya')} autofocus />
      <Input type="text" name="password" label={t('vvedite-parol')} />
      <Button className={cls.loginBtn} type="submit" theme="clear" size={BtnSize.L}>{t('voiti')}</Button>

    </form>
  );
};
