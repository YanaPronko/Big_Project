import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UISchema } from '../types/UISchema';

export const initialState: UISchema = {
  scroll: {},
};

export const UISlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    setScrollPosition: (state, action: PayloadAction<{path: string, pos: number}>) => {
      state.scroll[action.payload.path] = action.payload.pos;
    },
  },
});

export const { actions: UIActions } = UISlice;
export const { reducer: UIReducer } = UISlice;
