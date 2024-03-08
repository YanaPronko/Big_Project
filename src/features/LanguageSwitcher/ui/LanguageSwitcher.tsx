import { memo } from "react";

import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { ToggleFeatures } from "@/shared/lib/featureFlags";
import { Button } from "@/shared/ui/deprecated/Button";
import { ButtonRedesigned } from "@/shared/ui/redesigned/Button";

import cls from "./LanguageSwitcher.module.scss";

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LanguageSwitcher = memo((props: LanguageSwitcherProps) => {
  const { className, short, ...otherProps } = props;

  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  return (<ToggleFeatures feature="isAppRedesigned" on={
    <ButtonRedesigned
      className={classNames('', {}, [className])}
      variant="clear"
      onClick={toggleLang}
      {...otherProps}
    >
      {short ? t("ShortLng") : t("Language")}
    </ButtonRedesigned>
  }
    off={<Button
      className={classNames(cls.color_inverted, {}, [className])}
      theme="clear"
      onClick={toggleLang}
      {...otherProps}
    >
      {short ? t("ShortLng") : t("Language")}
    </Button> } />)

});
