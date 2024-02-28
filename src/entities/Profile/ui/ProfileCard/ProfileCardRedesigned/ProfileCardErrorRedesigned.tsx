import { memo } from "react";

import { useTranslation } from "react-i18next";

import { HStack } from "@/shared/ui/redesigned/Stack";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";


export const ProfileCardErrorRedesigned = memo(() => {
    const { t } = useTranslation("profile");

    return (
      <HStack justify="center" max>
        <TextRedesigned
          variant="error"
          title={t("Произошла ошибка при загрузке профиля")}
          text={t("Попробуйте обновить страницу")}
          align="center"
        />
      </HStack>
    );
  },
);
