import { memo, useCallback } from "react";

import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { ToggleFeatures } from "@/shared/lib/featureFlags";
import { ListBox } from "@/shared/ui/deprecated/Popups";
import { ListBoxRedesigned } from "@/shared/ui/redesigned/Popups";

import { Currency } from "../../model/types/currency";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: "USD", content: "USD" },
  { value: "EUR", content: "EUR" },
  { value: "BYN", content: "BYN" },
  { value: "RUB", content: "RUB" },
  { value: "UAN", content: "UAN" },
  { value: "KZT", content: "KZT" },
  { value: "AMD", content: "AMD" },
];

export const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange],
    );

    const props = {
      className: classNames("", {}, [className]),
      label: t("enter-currency"),
      items: options,
      selectedVal: value,
      defaultVal: "BYN",
      onChange: onChangeHandler,
      readonly,
      direction: "topR" as const,
    };

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<ListBoxRedesigned {...props} />}
        off={<ListBox {...props} />}
      />
    );
  },
);
