import { createSelector } from "@reduxjs/toolkit";

import { getUserAuthData } from "@/entities/User";
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from "@/shared/const/AppRoutes";
import { toggleFeatures } from "@/shared/lib/featureFlags";
import { AboutIcon } from "@/shared/ui/deprecated/AboutIcon";
import {
  ArticleIcon,
  MainIcon,
  ProfileIcon,
} from "@/shared/ui/deprecated/Icons";
import {
  AboutIconRedesigned,
  ArticleIconRedesigned,
  MainIconRedesigned,
} from "@/shared/ui/redesigned/Icons";
import { ProfileIconRedesigned } from "@/shared/ui/redesigned/Icons/ui/ProfileIcon/ProfileIcon";

import { SideBarItemType } from "../types/items";

export const getSideBarItemsList = createSelector(getUserAuthData, (data) => {
  const list: SideBarItemType[] = [
    {
      path: getRouteMain(),
      Icon: toggleFeatures({
        name: "isAppRedesigned",
        on: () => MainIconRedesigned,
        off: () => MainIcon,
      }),
      text: "Main",
    },
    {
      path: getRouteAbout(),
      Icon: toggleFeatures({
        name: "isAppRedesigned",
        on: () => AboutIconRedesigned,
        off: () => AboutIcon,
      }),
      text: "About",
    },
  ];

  if (data) {
    list.push(
      {
        path: getRouteArticles(),
        Icon: toggleFeatures({
          name: "isAppRedesigned",
          on: () => ArticleIconRedesigned,
          off: () => ArticleIcon,
        }),
        text: "Articles",
        authOnly: true,
      },
      {
        path: getRouteProfile(data.id),
        Icon: toggleFeatures({
          name: "isAppRedesigned",
          on: () => ProfileIconRedesigned,
          off: () => ProfileIcon,
        }),
        text: "Profile",
        authOnly: true,
      },
    );
  }
  return list;
});
