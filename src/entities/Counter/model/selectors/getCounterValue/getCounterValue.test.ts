import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('Testing getCounterValue selector', () => {
  test('Should return counter value from state', () => {
    const state: DeepPartial<StateSchema> = { counter: { value: 10 } };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
