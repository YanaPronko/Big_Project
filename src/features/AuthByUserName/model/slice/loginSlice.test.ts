import { loginReducer } from './loginSlice';
import { loginByUsername } from '../services/loginByUsername';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice test', () => {
  test('test loginReducer pending', () => {
    const state: DeepPartial<LoginSchema> = {
      isLoading: false,
    };
    expect(loginReducer(state as LoginSchema, loginByUsername.pending)).toEqual({ isLoading: true });
  });
  test('test loginReducer fullfiled', () => {
    const state: DeepPartial<LoginSchema> = {
      isLoading: true,
    };
    expect(
      loginReducer(state as LoginSchema, loginByUsername.fulfilled),
    ).toEqual({
      isLoading: false,
    });
  });
  test('test loginReducer rejected', () => {
    const state: DeepPartial<LoginSchema> = {
      isLoading: true,
    };
    expect(
      loginReducer(state as LoginSchema, loginByUsername.rejected),
    ).toEqual({
      isLoading: false,
    });
  });
});
