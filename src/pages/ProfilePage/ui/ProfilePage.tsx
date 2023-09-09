import { memo, useEffect } from 'react';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ReducersList, useDynamicLoad } from 'shared/lib/hooks/useDynamicLoad/useDynamicLoad';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  useDynamicLoad(reducers, true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <ProfileCard />
  );
});

export default ProfilePage;
