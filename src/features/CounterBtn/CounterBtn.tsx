import { FC } from 'react';
import { BtnSize, Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface CounterBtnProps {
  className?: string;
  setMessages: () => void;
}

export const CounterBtn: FC<CounterBtnProps> = (props) => {
  const { setMessages, ...otherProps } = props;

  const { t } = useTranslation('main');

  return (
    <Button
      size={BtnSize.M}
      onClick={setMessages}
      {...otherProps}
    >
      {t('1-message')}
    </Button>
  );
};
