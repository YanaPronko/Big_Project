import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { incr, decr } from '../model/slice/counterSlice';

interface CounterProps {
  className?: string;
}

export const Counter: FC<CounterProps> = () => {
  const value = useSelector(getCounterValue);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const increment = () => {
    dispatch(incr());
  };

  const decrement = () => {
    dispatch(decr());
  };

  return (
    <>
      <h2>
        {t('value')}
        :
        {value}
      </h2>
      <Button data-testid="increment" onClick={increment}>{t('increment')}</Button>
      <Button data-testid="decrement" onClick={decrement}>{t('decrement')}</Button>
    </>
  );
};
