import { RoutePaths } from 'app/config/routeConfig';
import React, { MemoExoticComponent } from 'react';
import { IconProps } from 'shared/const/common';
import { AboutIcon } from 'shared/ui/AboutIcon/AboutIcon';
import { MainIcon } from 'shared/ui/MainIcon/MainIcon';
import { ProfileIcon } from 'shared/ui/ProfileIcon/ProfileIcon';

export interface SideBarItemType {
  path: string;
  Icon: MemoExoticComponent<(props: IconProps) => React.JSX.Element>;
  text: string;
  authOnly?: boolean;
}

export const SideBarItemsList: SideBarItemType[] = [
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
  {
    path: RoutePaths.profile,
    Icon: ProfileIcon,
    text: 'Profile',
    authOnly: true,
  },
];
