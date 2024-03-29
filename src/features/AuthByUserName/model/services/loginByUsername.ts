import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkOptionsConfig } from "@/app/providers/StoreProvider";
import { User, userActions } from "@/entities/User";
import { LOCAL_STORAGE_LAST_DESIGN_KEY, USER_LOCALSTORAGE_KEY } from "@/shared/const/localStorage";

export interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkOptionsConfig<string>
>("login/loginByUsername", async (dataForAuth, thunkAPI) => {
  const { dispatch, extra, rejectWithValue } = thunkAPI;
  try {
    const response = await extra.api.post<User>("/login", dataForAuth);

    if (!response.data) {
      throw new Error();
    }
    dispatch(userActions.setAuthData(response.data));
    localStorage.setItem(USER_LOCALSTORAGE_KEY, response.data.id);

    const appRedesigned = response.data.featureFlags?.isAppRedesigned ? 'new' : "old";

    localStorage.setItem(LOCAL_STORAGE_LAST_DESIGN_KEY, appRedesigned);
    return response.data;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return rejectWithValue("error");
  }
});
