import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('Getting Validate errors from state', () => {
  test('getting form from profile', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateProfileErrors: ['no data', 'server error'],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      'no data',
      'server error',
    ]);
  });

  test('check selector without state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
