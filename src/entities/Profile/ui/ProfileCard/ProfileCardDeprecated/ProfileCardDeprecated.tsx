import { FC } from "react";

import { useTranslation } from "react-i18next";

import { CountrySelect } from "@/entities/Country";
import { CurrencySelect } from "@/entities/Currency";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Avatar } from "@/shared/ui/deprecated/Avatar";
import { Input } from "@/shared/ui/deprecated/Input";

import { ProfileCardErrorDeprecated } from "./ProfileCardErrorDeprecated";
import { ProfileCardSkeletonDeprecated } from "./ProfileCardSkeletonDeprecated";
import { ProfileCardProps } from "../ProfileCard";

import cls from "./ProfileCard.module.scss";

export const ProfileCardDeprecated: FC<ProfileCardProps> = (props) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeUsername,
    onChangeCity,
    onChangeAvatar,
    onChangeCountry,
    onChangeCurrency,
    ...otherProps
  } = props;
  const { t } = useTranslation("profile");

  if (isLoading) {
    return <ProfileCardSkeletonDeprecated />;
  }

  if (error) {
    return <ProfileCardErrorDeprecated />;
  }

  return (
    <div
      className={classNames(cls.profileCard, {}, [className])}
      {...otherProps}
    >
      {data?.avatar && (
        <Avatar
          className={cls.avatar}
          src={data.avatar}
          alt={t("avatar")}
          size={100}
        />
      )}
      <div className={cls.content}>
        <Input
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
        <Input
          key={2}
          name="lastname"
          label={t("lastname")}
          type="text"
          readonly={readonly}
          value={t(`${data?.lastname}`)}
          onChange={onChangeLastName}
          data-testid="EditableProfileCard.lastName"
        />
        <Input
          key={3}
          name="age"
          label={t("age")}
          type="text"
          readonly={readonly}
          value={data?.age}
          onChange={onChangeAge}
        />
        <Input
          value={data?.city}
          label={t("gorod")}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          name="username"
          key={4}
          label={t("username")}
          type="text"
          readonly={readonly}
          value={data?.username}
          onChange={onChangeUsername}
        />
        <Input
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
      </div>
    </div>
  );
};
