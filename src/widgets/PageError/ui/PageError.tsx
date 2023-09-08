import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';
import img from '../assets/error.gif';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
  const { className, ...otherProps } = props;
  const { t } = useTranslation();

  const onReload = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      <img
        className={cls.pageError}
        src={img}
        alt="Error gif"
        {...otherProps}
      />
      <Button onClick={onReload}>{t('reload-page')}</Button>
    </div>
  );
};
