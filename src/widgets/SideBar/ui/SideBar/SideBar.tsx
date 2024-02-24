import { memo } from "react";

import { ToggleFeatures } from "@/shared/lib/featureFlags";

import { SideBarDeprecated } from "./SideBarDeprecated/SideBarDeprecated";
import { SideBarRedesigned } from "./SideBarRedesigned/SideBarRedesigned";



export const SideBar = memo(() => (
  <ToggleFeatures
    feature="isAppRedesigned"
    on={<SideBarRedesigned />}
    off={<SideBarDeprecated />}
  />
));
