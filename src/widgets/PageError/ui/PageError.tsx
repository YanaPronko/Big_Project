import { FC } from "react";

import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { ToggleFeatures } from "@/shared/lib/featureFlags";
import { Button } from "@/shared/ui/deprecated/Button";
import { ButtonRedesigned } from "@/shared/ui/redesigned/Button";
import { VRevStack } from "@/shared/ui/redesigned/Stack";

import img from "../assets/error.gif";

import cls from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
  const { className, ...otherProps } = props;
  const { t } = useTranslation();

  const onReload = () => {
    window.location.reload();
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <VRevStack
          justify="center"
          className={classNames(cls.wrapper, {}, [className])}
        >
          <img
            className={cls.pageError}
            src={img}
            alt="Error gif"
            {...otherProps}
          />
          <ButtonRedesigned onClick={onReload}>
            {t("reload-page")}
          </ButtonRedesigned>
        </VRevStack>
      }
      off={
        <VRevStack
          justify="center"
          className={classNames(cls.wrapper, {}, [className])}
        >
          <img
            className={cls.pageError}
            src={img}
            alt="Error gif"
            {...otherProps}
          />
          <Button onClick={onReload}>{t("reload-page")}</Button>
        </VRevStack>
      }
    />
  );
};
