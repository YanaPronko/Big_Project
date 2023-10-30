import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '../getProfileData/getProfileData';

export const getEditStatus = createSelector(getProfileData, getUserAuthData, (profile, user) => profile?.id === user?.id);
