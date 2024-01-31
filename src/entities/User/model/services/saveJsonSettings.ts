import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkOptionsConfig } from "@/app/providers/StoreProvider";

import { JsonSettings, getUserAuthData } from "../..";
import { setJsonSettingsMutation } from "../../api/userApi";
import { getJsonSettings } from "../selectors/getJsonSettings";

export const saveJsonSettings = createAsyncThunk<
  JsonSettings,
  JsonSettings,
  ThunkOptionsConfig<string>
>("user/saveJsonSettings", async (newSettings, thunkAPI) => {
  const { dispatch, rejectWithValue, getState } = thunkAPI;

  const userData = getUserAuthData(getState());
  const currentJsonSettings = getJsonSettings(getState());

  if (!userData) {
    return rejectWithValue("User data not found");
  }

  try {
    const response = await dispatch(
      setJsonSettingsMutation({
        userId: userData.id,
        jsonSettings: {
          ...currentJsonSettings,
          ...newSettings,
        },
      }),
    ).unwrap();

    if (!response.jsonSettings) {
      return rejectWithValue("User json settings not found");
    }
    return response.jsonSettings;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return rejectWithValue("Fetch user settings failed! Try again!");
  }
});
