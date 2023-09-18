import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('Getting isLoading status from state', () => {
  test('getting isLoading status from profile', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { isLoading: true },
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });

  test('check selector without state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
