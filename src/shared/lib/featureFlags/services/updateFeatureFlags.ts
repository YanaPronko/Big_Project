import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkOptionsConfig } from "@/app/providers/StoreProvider";
import { LOCAL_STORAGE_LAST_DESIGN_KEY } from "@/shared/const/localStorage";
import { FeatureFlags } from "@/shared/types/featureFlags";

import { updateFeatureFlagsMutation } from "../api/featureFlagsApi";
import { getAllFeatureFlags, setFeatureFlags } from "../lib/setGetFeatureFlags";

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

  const allFeatures = {
    ...getAllFeatureFlags(),
    ...newFeatures,
  };

  try {
    await dispatch(
      updateFeatureFlagsMutation({
        userId,
        featureFlags: allFeatures,
      }),
    );
    localStorage.setItem(
      LOCAL_STORAGE_LAST_DESIGN_KEY,
      newFeatures?.isAppRedesigned ? "new" : "old",
    );
    setFeatureFlags(allFeatures);
    window.location.reload();
    return undefined;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return rejectWithValue("");
  }
});
