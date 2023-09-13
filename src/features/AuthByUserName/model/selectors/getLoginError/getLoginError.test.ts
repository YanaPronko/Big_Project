import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('Getting error from state', () => {
  test('getting error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
        isLoading: false,
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual('error');
  });

  test('check selector without state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
