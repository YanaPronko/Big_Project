import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups';

import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: 'Armenia', content: 'Armenia' },
  { value: 'Belarus', content: 'Belarus' },
  { value: 'Kazakhstan', content: 'Kazakhstan' },
  { value: 'Russia', content: 'Russia' },
  { value: 'Ukraine', content: 'Ukraine' },
];

export const CountrySelect = memo(({
  className, value, onChange, readonly,
}: CountrySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );

  return (
    <ListBox
      className={classNames('', {}, [className])}
      label={t('enter-country')}
      items={options}
      selectedVal={value}
      defaultVal="Belarus"
      onChange={onChangeHandler}
      readonly={readonly}
      direction="topR"
    />
  );
});
