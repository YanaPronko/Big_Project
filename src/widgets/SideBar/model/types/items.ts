import React, { MemoExoticComponent } from 'react';
import { IconProps } from 'shared/const/common';

export interface SideBarItemType {
  path: string;
  Icon: MemoExoticComponent<(props: IconProps) => React.JSX.Element>;
  text: string;
  authOnly?: boolean;
}
