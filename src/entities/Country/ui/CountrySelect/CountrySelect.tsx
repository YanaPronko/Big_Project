import { memo, useCallback } from "react";

import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { ListBox } from "@/shared/ui/deprecated/Popups";

import { Country } from "../../model/types/country";
import { ToggleFeatures } from "@/shared/lib/featureFlags";
import { ListBoxRedesigned } from "@/shared/ui/redesigned/Popups";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: "Armenia", content: "Armenia" },
  { value: "Belarus", content: "Belarus" },
  { value: "Kazakhstan", content: "Kazakhstan" },
  { value: "Russia", content: "Russia" },
  { value: "Ukraine", content: "Ukraine" },
];

export const CountrySelect = memo(
  ({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange],
    );

    const props = {
      className: classNames('', { }, [className]),
      label: t("enter-country"),
      items: options,
      selectedVal: value,
      defaultVal: "Belarus",
      onChange: onChangeHandler,
      readonly,
      direction: "topR" as const,
    }

    return (<ToggleFeatures feature="isAppRedesigned" on={<ListBoxRedesigned {...props} />} off={<ListBox {...props} />} />);
  },
);
