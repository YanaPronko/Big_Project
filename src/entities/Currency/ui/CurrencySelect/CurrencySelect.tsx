import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
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
    <Select
      className={classNames('', {}, [className])}
      label={t('enter-currency')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
