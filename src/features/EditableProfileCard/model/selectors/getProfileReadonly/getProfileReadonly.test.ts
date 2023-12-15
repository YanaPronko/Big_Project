import { StateSchema } from '@/app/providers/StoreProvider';

import { getProfileReadonly } from './getProfileReadonly';

describe('Getting Readonly status from state', () => {
  test('getting readonly status from profile', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { readonly: true },
    };
    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });

  test('check selector without state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
  });
});
