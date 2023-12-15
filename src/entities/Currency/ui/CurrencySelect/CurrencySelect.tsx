import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: 'USD', content: 'USD' },
  { value: 'EUR', content: 'EUR' },
  { value: 'BYN', content: 'BYN' },
  { value: 'RUB', content: 'RUB' },
  { value: 'UAN', content: 'UAN' },
  { value: 'KZT', content: 'KZT' },
  { value: 'AMD', content: 'AMD' },
];

export const CurrencySelect = memo(({
  className, value, onChange, readonly,
}: CurrencySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );

  return (
    <ListBox
      className={classNames('', {}, [className])}
      label={t('enter-currency')}
      items={options}
      selectedVal={value}
      defaultVal="BYN"
      onChange={onChangeHandler}
      readonly={readonly}
      direction="topR"
    />
  );
});
