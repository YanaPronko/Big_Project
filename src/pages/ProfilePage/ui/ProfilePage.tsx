import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ReducersList, useDynamicLoad } from 'shared/lib/hooks/useDynamicLoad/useDynamicLoad';
import { EditableProfileCard, profileReducer } from 'features/EditableProfileCard';
import { fetchProfileData } from 'features/EditableProfileCard/model/services/fetchProfileData/fetchProfileData';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  useDynamicLoad(reducers, true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  return (
    <EditableProfileCard />
  );
});

export default ProfilePage;
