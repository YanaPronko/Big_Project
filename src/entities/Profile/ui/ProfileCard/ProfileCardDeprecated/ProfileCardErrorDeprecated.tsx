import { memo } from "react";

import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui/deprecated/Text";

import cls from "./ProfileCard.module.scss";

interface ProfileCardErrorDeprecatedProps {
  className?: string;
}

export const ProfileCardErrorDeprecated = memo(
  (props: ProfileCardErrorDeprecatedProps) => {
    const { className, ...otherProps } = props;
    const { t } = useTranslation("profile");

    return (
      <div
        className={classNames(cls.profileCard, {}, [className])}
        {...otherProps}
      >
        <Text title={t("error")} align="center" theme="error" />
        <Text
          text={t("try-reload-the-page")}
          align="center"
          size="l"
          theme="error"
        />
      </div>
    );
  },
);
