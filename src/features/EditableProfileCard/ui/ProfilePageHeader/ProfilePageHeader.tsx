import { ToggleFeatures } from "@/shared/lib/featureFlags";

import { ProfilePageHeaderDeprecated } from "./ProfilePageHeaderDeprecated/ProfilePageHeader";
import { ProfilePageHeaderRedesigned } from "./ProfilePageHeaderRedesigned/ProfilePageHeader";
import { ProfilePageHeaderProps } from "../../model/types/profileSchema";

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => (
  <ToggleFeatures
    feature="isAppRedesigned"
    on={<ProfilePageHeaderRedesigned {...props} />}
    off={<ProfilePageHeaderDeprecated {...props} />}
  />
);
