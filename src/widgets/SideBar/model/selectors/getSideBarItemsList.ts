import { createSelector } from '@reduxjs/toolkit';
import { RoutePaths } from '@/app/config/routeConfig';
import { getUserAuthData } from '@/entities/User';
import { AboutIcon } from '@/shared/ui/AboutIcon/AboutIcon';
import { ArticleIcon } from '@/shared/ui/Icons/ui/ArticleIcon/ArticleIcon';
import { MainIcon } from '@/shared/ui/Icons/ui/MainIcon/MainIcon';
import { ProfileIcon } from '@/shared/ui/Icons/ui/ProfileIcon/ProfileIcon';
import { SideBarItemType } from '../types/items';

export const getSideBarItemsList = createSelector(getUserAuthData, (data) => {
  const list: SideBarItemType[] = [
    {
      path: RoutePaths.main,
      Icon: MainIcon,
      text: 'Main',
    },
    {
      path: RoutePaths.about,
      Icon: AboutIcon,
      text: 'About',
    },
  ];

  if (data) {
    list.push(
      {
        path: RoutePaths.articles,
        Icon: ArticleIcon,
        text: 'Articles',
        authOnly: true,
      },
      {
        path: `${RoutePaths.profile}${data.id}`,
        Icon: ProfileIcon,
        text: 'Profile',
        authOnly: true,
      },
    );
  }
  return list;
});
