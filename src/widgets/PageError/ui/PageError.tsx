import { FC } from 'react';
import img from '../assets/error.gif';
import { classNames } from "shared/lib/classNames/classNames";
import cls from './PageError.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
  const { className, ...otherProps } = props;
  const { t } = useTranslation();

  const onReload = () => {
    window.location.reload();
  }

  return (
    <>
      <img
        className={classNames(cls.pageError, {}, [className])}
        src={img}
        alt="Error gif"
        {...otherProps}
      />
      <Button className='normal' onClick={onReload}>
        {t('reload-page')}
      </Button>
    </>
  );
}