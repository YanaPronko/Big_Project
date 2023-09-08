import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ProfilePage = memo(() => {
  const { t } = useTranslation('profile');

  return (
    <h1>{t('profile-page')}</h1>
  );
});

export default ProfilePage;
