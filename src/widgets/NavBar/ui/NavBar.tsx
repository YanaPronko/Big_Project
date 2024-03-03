import { memo } from "react";

import { ToggleFeatures } from "@/shared/lib/featureFlags";

import { NavBarDeprecated } from "./NavBarDeprecated/NavBarDeprecated";
import { NavbarRedesigned } from "./NavBarRedesigned/NavBarRedesigned";
import { NavBarProps } from "../model/types/navbar";

export const NavBar = memo((props: NavBarProps) => (
  <ToggleFeatures
    feature="isAppRedesigned"
    off={<NavBarDeprecated {...props} />}
    on={<NavbarRedesigned {...props} />}
  />
));
