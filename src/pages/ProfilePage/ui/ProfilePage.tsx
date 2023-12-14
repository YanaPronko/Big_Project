import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ReducersList, useDynamicLoad } from '@/shared/lib/hooks/useDynamicLoad/useDynamicLoad';
import {
  EditableProfileCard,
  profileReducer,
  fetchProfileData,
} from '@/features/EditableProfileCard';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page';
import { ProfileRating } from '@/features/ProfileRating';
import { Text } from '@/shared/ui/Text/Text';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  useDynamicLoad(reducers, true);
  const dispatch = useAppDispatch();
  const { id } = useParams<string>();
  const { t } = useTranslation('profile');

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  }, [dispatch, id]);

  if (!id) {
    return <Text theme="error" text={t('such-profile-hasnt-been-found')} />;
  }

  return (
    <Page>
      <EditableProfileCard />
      <ProfileRating profileId={id} />
    </Page>
  );
});

export default ProfilePage;
