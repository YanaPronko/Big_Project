import { FC } from "react";

import { useTranslation } from "react-i18next";

import { CountrySelect } from "@/entities/Country";
import { CurrencySelect } from "@/entities/Currency";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AvatarRedesigned } from "@/shared/ui/redesigned/Avatar";
import { CardRedesigned } from "@/shared/ui/redesigned/Card";
import { InputRedesigned } from "@/shared/ui/redesigned/Input";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";

import { ProfileCardErrorRedesigned } from "./ProfileCardErrorRedesigned";
import { ProfileCardSkeletonRedesigned } from "./ProfileCardSkeletonRedesigned";
import { ProfileCardProps } from '../ProfileCard';

import cls from "./ProfileCard.module.scss";

export const ProfileCardRedesigned: FC<ProfileCardProps> = (props) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCountry,
    onChangeCurrency,
    ...otherProps
  } = props;
  const { t } = useTranslation("profile");

  if (isLoading) {
    return <ProfileCardSkeletonRedesigned />;
  }

  if (error) {
    return <ProfileCardErrorRedesigned />;
  }

  return (
    <CardRedesigned
      className={classNames(cls.profileCard, {}, [className])}
      padding="24"
      max
      {...otherProps}
    >
      <HStack max justify="center">
        {data?.avatar && (
          <AvatarRedesigned src={data.avatar} alt={t("avatar")} size={128} />
        )}
      </HStack>

      <HStack gap="24" max>
        <VStack gap="16" max>
          <InputRedesigned
            key={1}
            name="firstname"
            label={t("first-name>")}
            type="text"
            autoFocus
            readonly={readonly}
            value={t(`${data?.first}`)}
            onChange={onChangeFirstName}
            data-testid="EditableProfileCard.firstName"
          />
          <InputRedesigned
            key={2}
            name="lastname"
            label={t("lastname")}
            type="text"
            readonly={readonly}
            value={t(`${data?.lastname}`)}
            onChange={onChangeLastName}
            data-testid="EditableProfileCard.lastName"
          />
          <InputRedesigned
            key={3}
            name="age"
            label={t("age")}
            type="text"
            readonly={readonly}
            value={data?.age}
            onChange={onChangeAge}
          />
          <InputRedesigned
            value={data?.city}
            label={t("gorod")}
            onChange={onChangeCity}
            readonly={readonly}
          />
        </VStack>
        <VStack gap="16" max>
          <InputRedesigned
            name="username"
            key={4}
            label={t("username")}
            type="text"
            readonly={readonly}
            value={data?.username}
            onChange={onChangeUsername}
          />
          <InputRedesigned
            key={5}
            className={cls.ref}
            label={t("enter-refference-to-avatar")}
            type="text"
            readonly={readonly}
            value={data?.avatar}
            onChange={onChangeAvatar}
          />
          <CountrySelect
            key={6}
            value={data?.country}
            readonly={readonly}
            onChange={onChangeCountry}
          />
          <CurrencySelect
            key={7}
            readonly={readonly}
            value={data?.currency}
            onChange={onChangeCurrency}
          />
        </VStack>
      </HStack>
    </CardRedesigned>
  );
};
