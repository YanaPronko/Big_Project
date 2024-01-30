import { FeatureFlags } from "@/shared/types/featureFlags";

import { JsonSettings } from "./jsonSettings";

export type UserRole = "ADMIN" | "MANAGER" | "USER";

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
  featureFlags?: FeatureFlags;
  jsonSettings?: JsonSettings;
}

export interface UserSchema {
  authData?: User | undefined;
  _inited: boolean;
}
