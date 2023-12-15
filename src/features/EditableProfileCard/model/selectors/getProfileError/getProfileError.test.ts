import { StateSchema } from '@/app/providers/StoreProvider';

import { getProfileError } from './getProfileError';

describe('Getting Profile Error from state', () => {
  test('getting error from profile', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { error: 'error' },
    };
    expect(getProfileError(state as StateSchema)).toEqual('error');
  });

  test('check selector without state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
