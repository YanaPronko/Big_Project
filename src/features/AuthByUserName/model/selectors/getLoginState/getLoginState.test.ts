import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('Getting login state', () => {
  test('getting state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
        isLoading: true,
      },
    };
    expect(getLoginState(state as StateSchema)).toEqual({
      error: 'error',
      isLoading: true,
    });
  });
});
