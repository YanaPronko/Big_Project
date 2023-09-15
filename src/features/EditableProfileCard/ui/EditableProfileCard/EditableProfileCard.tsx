import { ProfileCard } from 'entities/Profile';
import { getProfileError } from 'features/EditableProfileCard/model/selectors/getProfileError/getProfileError';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { ProfilePageHeader } from '../ProfilePageHeader/ProfilePageHeader';
import { profileActions } from '../../model/slice/profileSlice';
import cls from './EditableProfileCard.module.scss';

interface EditableProfileCardProps {
  className?: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, ...otherProps } = props;

  const form = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

  const dispatch = useAppDispatch();

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
    <div
      className={classNames(cls.editableProfileCard, {}, [className])}
      {...otherProps}
    >
      <ProfilePageHeader />
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
    </div>
  );
});
