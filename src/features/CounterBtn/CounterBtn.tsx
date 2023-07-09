import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './CounterBtn.module.scss';

interface CounterBtnProps {
  className?: string;
  setMessages: () => void;
}

export const CounterBtn: FC<CounterBtnProps> = (props) => {
  const { className, setMessages, ...otherProps } = props;

  const { t } = useTranslation('main');

  return (
    <Button
      className={classNames(cls.counterBtn, {}, [className])}
      onClick={setMessages}
      {...otherProps}
    >
      {t('1-message')}
    </Button>
  );
};
