import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<Returned, Arg, RejectedValue> =
  (arg: Arg) => AsyncThunkAction<Returned, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Returned, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;

  getState: () => StateSchema;

  actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>;

  constructor(actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>) {
    // eslint-disable-next-line no-unused-expressions
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callAthyncThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = action(this.dispatch, this.getState, undefined);
    return result;
  }
}
