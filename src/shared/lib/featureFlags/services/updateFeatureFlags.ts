import { createAsyncThunk } from "@reduxjs/toolkit";

import { FeatureFlags } from "@/shared/types/featureFlags";
import { updateFeatureFlagsMutation } from "../api/featureFlagsApi";
import { getAllFeatureFlags } from "../lib/setGetFeatureFlags";
import { ThunkOptionsConfig } from "@/app/providers/StoreProvider";

interface UpdateFeatureFlagOptions {
  userId: string;
  newFeatures: Partial<FeatureFlags>;
}

export const updateFeatureFlags = createAsyncThunk<
  void,
  UpdateFeatureFlagOptions,
  ThunkOptionsConfig<string>
>("features/toggleFeatureFlag", async ({ userId, newFeatures }, thunkApi) => {
  const { rejectWithValue, dispatch } = thunkApi;

  try {
    await dispatch(
      updateFeatureFlagsMutation({
        userId,
        featureFlags: {
          ...getAllFeatureFlags(),
          ...newFeatures,
        },
      }),
    );

    window.location.reload();
    return undefined;
  } catch (e) {
    console.log(e);
    return rejectWithValue("");
  }
});
