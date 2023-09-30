/* eslint-disable no-undef */
import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from 'features/addCommentForm/model/slice/addCommentFormSlice';
import { loginReducer } from 'features/AuthByUserName';
import { profileReducer } from 'features/EditableProfileCard';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
import { ReducersList } from 'shared/lib/hooks/useDynamicLoad/useDynamicLoad';

const defaultAsyncReducers = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
  addCommentForm: addCommentFormReducer,
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
