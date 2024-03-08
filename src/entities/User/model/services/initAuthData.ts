import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkOptionsConfig } from "@/app/providers/StoreProvider";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localStorage";

import { getUserDataByIdQuery } from "../../api/userApi";
import { User } from "../types/user";

export const initUserAuthData = createAsyncThunk<
  User,
  void,
  ThunkOptionsConfig<string>
>("user/initUserAuthData", async (_, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

  if (!userId) {
    return rejectWithValue("User's id not found");
  }

  try {
    const response = await dispatch(getUserDataByIdQuery(userId)).unwrap();
    // localStorage.setItem(
    //   LOCAL_STORAGE_LAST_DESIGN_KEY,
    //   response.featureFlags?.isAppRedesigned ? "new" : "old",
    // );

    if (!response) {
      return rejectWithValue("User not found");
    }

    return response;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return rejectWithValue("Fetch User failed! Try again!");
  }
});
