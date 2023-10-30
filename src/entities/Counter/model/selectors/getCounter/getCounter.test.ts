import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('Testing getCounter selector', () => {
  test('Should return state with counter', () => {
    const state: DeepPartial<StateSchema> = { counter: { value: 10 } };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
