import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('Testing getCounter selector', () => {
  test('Should return state with counter', () => {
    const state: StateSchema = { counter: { value: 10 } };
    expect(getCounter(state)).toEqual({ value: 10 });
  });
});
