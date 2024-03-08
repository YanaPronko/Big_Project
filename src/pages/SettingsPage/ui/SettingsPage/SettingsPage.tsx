import { memo } from "react";

import { useTranslation } from "react-i18next";

import { UIDesignSwitcher } from "@/features/UIDesignSwitcher";
import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";
import { Page } from "@/widgets/Page";

import cls from "./SettingsPage.module.scss";

interface SettingsPageProps {
  className?: string;
}

const SettingsPage = memo((props: SettingsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page>
      <TextRedesigned
        title={t("users-settings")}
        bold
        align="center"
        className={classNames(cls.title, {}, [className])}
      />
      <VStack gap="16" align="start">
        <UIDesignSwitcher />
      </VStack>
    </Page>
  );
});

export default SettingsPage;
