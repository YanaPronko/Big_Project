import { memo } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { ProfileCard } from "@/entities/Profile";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";

import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { getProfileValidateErrors } from "../../model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import { profileActions } from "../../model/slice/profileSlice";
import { ProfilePageHeader } from "../ProfilePageHeader/ProfilePageHeader";

import cls from "./EditableProfileCard.module.scss";

interface EditableProfileCardProps {
  className?: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, ...otherProps } = props;

  const form = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const dispatch = useAppDispatch();
  const { t } = useTranslation("profile");

  const onChangeFirstName = (value: string) => {
    dispatch(profileActions.updateProfile({ first: value }));
  };

  const onChangeLastName = (value: string) => {
    dispatch(profileActions.updateProfile({ lastname: value }));
  };

  const onChangeAge = (value: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value) }));
  };

  const onChangeUsername = (value: string) => {
    dispatch(profileActions.updateProfile({ username: value }));
  };

  const onChangeAvatar = (value: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }));
  };

  const onChangeCountry = (value: Country) => {
    dispatch(profileActions.updateProfile({ country: value }));
  };

  const onChangeCurrency = (value: Currency) => {
    dispatch(profileActions.updateProfile({ currency: value }));
  };

  return (
    <section
      data-testid="profile"
      className={classNames(cls.editableProfileCard, {}, [className])}
      {...otherProps}
    >
      <ProfilePageHeader />
      {validateErrors?.length && (
        <VStack gap="4">
          {validateErrors.map((err) => (
            <Text theme="error" title={t(`${err}`)} key={err} />
          ))}
        </VStack>
      )}
      <ProfileCard
        data={form}
        error={error}
        isLoading={isLoading}
        readonly={readonly}
        onChangeFirstName={onChangeFirstName}
        onChangeLastName={onChangeLastName}
        onChangeAge={onChangeAge}
        onChangeUsername={onChangeUsername}
        onChangeAvatar={onChangeAvatar}
        onChangeCountry={onChangeCountry}
        onChangeCurrency={onChangeCurrency}
      />
    </section>
  );
});
