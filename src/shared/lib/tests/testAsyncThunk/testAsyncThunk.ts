import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { StateSchema } from '@/app/providers/StoreProvider';

type ActionCreatorType<Returned, Arg, RejectedValue> =
  (arg: Arg) => AsyncThunkAction<Returned, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Returned, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;

  getState: () => StateSchema;

  actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  constructor(
    actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>,
    // eslint-disable-next-line no-undef
    state?: DeepPartial<StateSchema>,
  ) {
    // eslint-disable-next-line no-unused-expressions
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);

    this.api = mockedAxios;
  }

  async callAthyncThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = action(this.dispatch, this.getState, {
      api: this.api,
    });
    return result;
  }
}
