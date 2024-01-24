import { createSelector } from "@reduxjs/toolkit";

import { getUserAuthData } from "@/entities/User";
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from "@/shared/const/AppRoutes";
import { AboutIcon } from "@/shared/ui/AboutIcon";
import { ArticleIcon, MainIcon, ProfileIcon } from "@/shared/ui/Icons";

import { SideBarItemType } from "../types/items";

export const getSideBarItemsList = createSelector(getUserAuthData, (data) => {
  const list: SideBarItemType[] = [
    {
      path: getRouteMain(),
      Icon: MainIcon,
      text: "Main",
    },
    {
      path: getRouteAbout(),
      Icon: AboutIcon,
      text: "About",
    },
  ];

  if (data) {
    list.push(
      {
        path: getRouteArticles(),
        Icon: ArticleIcon,
        text: "Articles",
        authOnly: true,
      },
      {
        path: getRouteProfile(data.id),
        Icon: ProfileIcon,
        text: "Profile",
        authOnly: true,
      },
    );
  }
  return list;
});
