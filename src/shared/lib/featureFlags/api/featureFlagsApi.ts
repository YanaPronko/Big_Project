import { FeatureFlags } from "@/shared/types/featureFlags";

import { rtkApi } from "../../../api/rtk";

interface UpdateFeatureFlagsOptions {
  userId: string;
  featureFlags: Partial<FeatureFlags>;
}

const featureFlagsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    updateFeatureFlags: build.mutation<void, UpdateFeatureFlagsOptions>({
      query: ({ userId, featureFlags }) => ({
        url: `/users/${userId}`,
        method: "PATCH",
        body: {
          featureFlags,
        },
      }),
    }),
  }),
});

export const updateFeatureFlagsMutation =
  featureFlagsApi.endpoints.updateFeatureFlags.initiate;
