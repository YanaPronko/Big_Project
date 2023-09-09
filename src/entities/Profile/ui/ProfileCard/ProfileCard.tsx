import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const { className, ...otherProps } = props;
  const { t } = useTranslation('profile');
  const profileData = useSelector(getProfileData);

  return (
    <div
      className={classNames(cls.profileCard, {}, [className])}
      {...otherProps}
    >
      <div className={cls.header}>
        <Text title={t('profile-card')} />
        <Button theme="outline">{t('edit-profile')}</Button>
      </div>
      <div className={cls.content}>
        <Input key={1} label={t('first-name>')} type="text" autoFocus value={t(`${profileData?.first}`)} />
        <Input key={2} label={t('lastname>')} type="text" value={t(`${profileData?.lastname}`)} />
      </div>
    </div>
  );
};
