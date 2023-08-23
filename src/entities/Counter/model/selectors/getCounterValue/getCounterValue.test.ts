import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('Testing getCounterValue selector', () => {
  test('Should return counter value from state', () => {
    const state: StateSchema = { counter: { value: 10 } };
    expect(getCounterValue(state)).toEqual(10);
  });
});
