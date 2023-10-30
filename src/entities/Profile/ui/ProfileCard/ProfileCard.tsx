import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Profile } from '@/features/EditableProfileCard';
import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input/Input';
import { Text } from '@/shared/ui/Text/Text';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstName?: (value: string) => void;
  onChangeLastName?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCountry?: (value: Country) => void;
  onChangeCurrency?: (value: Currency) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    className, data, isLoading, error, readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCountry,
    onChangeCurrency,
    ...otherProps
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div
        className={classNames(cls.profileCard, {}, [className])}
        {...otherProps}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={classNames(cls.profileCard, {}, [className])}
        {...otherProps}
      >
        <Text title={t('error')} align="center" theme="error" />
        <Text text={t('try-reload-the-page')} align="center" size="l" theme="error" />
      </div>
    );
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
          alt={t('avatar')}
          size={100}
        />
      )}
      <div className={cls.content}>
        <Input
          key={1}
          name="firstname"
          label={t('first-name>')}
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
          label={t('lastname')}
          type="text"
          readonly={readonly}
          value={t(`${data?.lastname}`)}
          onChange={onChangeLastName}
          data-testid="EditableProfileCard.lastName"
        />
        <Input
          key={3}
          name="age"
          label={t('age')}
          type="text"
          readonly={readonly}
          value={data?.age}
          onChange={onChangeAge}
        />
        <Input
          name="username"
          key={4}
          label={t('username')}
          type="text"
          readonly={readonly}
          value={data?.username}
          onChange={onChangeUsername}
        />
        <Input
          key={5}
          className={cls.ref}
          label={t('enter-refference-to-avatar')}
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
