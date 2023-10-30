import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BtnSize, Button } from '@/shared/ui/Button/Button';
import cls from './CounterBtn.module.scss';

interface CounterBtnProps {
  className?: string;
  setMessages: () => void;
}

export const CounterBtn: FC<CounterBtnProps> = (props) => {
  const { setMessages, ...otherProps } = props;

  const { t } = useTranslation('main');

  return (
    <Button
      className={cls.btn}
      size={BtnSize.M}
      theme="outline"
      onClick={setMessages}
      {...otherProps}
    >
      {t('1-message')}
    </Button>
  );
};
