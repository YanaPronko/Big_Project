import { LOCAL_STORAGE_LAST_DESIGN_KEY } from "@/shared/const/localStorage";

import { FeatureFlags } from "../../../types/featureFlags";

const defaultFeatureFlags: FeatureFlags = {
  isAppRedesigned: localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new',
}

let featureFlags: FeatureFlags = {
  ...defaultFeatureFlags,
};

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
  featureFlags = newFeatureFlags ?? defaultFeatureFlags;
}

export function getFeatureFlags(flag: keyof FeatureFlags) {
  return featureFlags[flag];
}

export function getAllFeatureFlags() {
  return featureFlags;
}
