import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localStorage";
import { setFeatureFlags } from "@/shared/lib/featureFlags";

import { initUserAuthData } from "../services/initAuthData";
import { saveJsonSettings } from "../services/saveJsonSettings";
import { JsonSettings } from "../types/jsonSettings";
import { User, UserSchema } from "../types/user";

const initialState: UserSchema = {
  _inited: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User | undefined>) => {
      state.authData = action.payload;
      setFeatureFlags(action.payload?.featureFlags);
      if (action.payload) {
        localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id);
      }
    },
    setInited: (state, action: PayloadAction<boolean>) => {
      state._inited = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      saveJsonSettings.fulfilled,
      (state, action: PayloadAction<JsonSettings>) => {
        if (state.authData) {
          state.authData.jsonSettings = action.payload;
        }
      },
    );
    builder
      .addCase(
        initUserAuthData.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.authData = action.payload;
          setFeatureFlags(action.payload.featureFlags);
          state._inited = true;
        },
      )
      .addCase(initUserAuthData.rejected, (state) => {
        state._inited = true;
      });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
