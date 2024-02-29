import { ReactElement } from "react";

import { FeatureFlags } from "../../../types/featureFlags";
import { getFeatureFlags } from "../lib/setGetFeatureFlags";

interface ToggleFeaturesProps {
  feature: keyof FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
  const { on, off, feature } = props;

  if (getFeatureFlags(feature)) {
    return on;
  }

  return off;
};
