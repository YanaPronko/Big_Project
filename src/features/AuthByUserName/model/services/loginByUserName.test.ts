// import { Dispatch } from '@reduxjs/toolkit';
// import { StateSchema } from 'app/providers/StoreProvider';
import axios from 'axios';
import { userActions } from 'entities/User';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('Testing athyncThunk: loginByUserName', () => {
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;

  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });

  test('success login', async () => {
    const userValue = {
      id: '1',
      username: 'admin',
    };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    // const action = loginByUsername({ username: 'admin', password: '1111' });
    // const result = await action(dispatch, getState, undefined);
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callAthyncThunk({ username: 'admin', password: '1111' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('error login', async () => {
    const userValue = {
      id: '1',
      username: 'admin',
    };
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callAthyncThunk({ username: 'admin', password: '1111' });

    // const action = loginByUsername({ username: 'admin', password: '1111' });
    // const result = await action(dispatch, getState, undefined);

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).not.toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('error');
  });
});
