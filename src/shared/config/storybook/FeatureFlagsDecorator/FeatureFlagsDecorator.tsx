import { Decorator } from "@storybook/react";

import { setFeatureFlags } from "@/shared/lib/featureFlags";
import { FeatureFlags } from "@/shared/types/featureFlags";

export const FeatureFlagsDecorator =
  (features: FeatureFlags): Decorator =>
  (Story) => {
    setFeatureFlags(features);
    return <Story />;
  };
