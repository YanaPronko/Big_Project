import { createSelector } from '@reduxjs/toolkit';

import { getArtcileDetailsData } from '@/entities/Article';
import { getUserAuthData } from '@/entities/User';

export const getEditStatus = createSelector(getArtcileDetailsData, getUserAuthData, (article, user) => {
  if (!article?.id || !user?.id) return false;

  return article.user.id === user.id;
});
