import { setFeatureFlags } from "@/shared/lib/featureFlags";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    },
    setInited: (state, action: PayloadAction<boolean>) => {
      state._inited = action.payload;
    },
  }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
