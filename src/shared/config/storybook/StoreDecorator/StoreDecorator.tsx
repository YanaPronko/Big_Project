/* eslint-disable no-undef */
import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUserName';
import { profileReducer } from 'features/EditableProfileCard';
import { ReducersList } from 'shared/lib/hooks/useDynamicLoad/useDynamicLoad';

const defaultAsyncReducers = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
): Decorator => (Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <Story />
  </StoreProvider>
);

export default StoreDecorator;
