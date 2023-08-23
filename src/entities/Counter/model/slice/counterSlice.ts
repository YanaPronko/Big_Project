import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/CounterSchema';

const initialState: CounterSchema = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incr: (state) => {
      state.value += 1;
    },
    decr: (state) => {
      state.value -= 1;
    },
  },
});

export const { actions: { incr, decr } } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
