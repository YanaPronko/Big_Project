import { CounterSchema } from '../types/CounterSchema';

import { counterReducer, decr, incr } from './counterSlice';

describe('Testing counterSlice reducer', () => {
  test('Testing increment action', () => {
    const initialState: CounterSchema = { value: 10 };
    expect(counterReducer(initialState, incr)).toEqual({ value: 11 });
  });

  test('Testing decrement action', () => {
    const initialState: CounterSchema = { value: 10 };
    expect(counterReducer(initialState, decr)).toEqual({ value: 9 });
  });

  test('Testing counterReducer with empty state', () => {
    expect(counterReducer(undefined, incr)).toEqual({ value: 1 });
  });
});
