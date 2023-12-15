/* eslint-disable no-undef */
import { Decorator } from '@storybook/react';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/Article';
import { loginReducer } from '@/features/AuthByUserName';
import { addCommentFormReducer } from '@/features/CommentForm/testing';
import { profileReducer } from '@/features/EditableProfileCard';
import { articlesFiltersReducer } from '@/features/FiltersOfArticle';
import { articleDetailsCommentsReducer } from '@/pages/ArticleDetailsPage/testing';
import { articlesPageReducer } from '@/pages/ArticleListPages/testing';
import { ReducersList } from '@/shared/lib/hooks/useDynamicLoad/useDynamicLoad';

const defaultAsyncReducers = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  comments: articleDetailsCommentsReducer,
  addCommentForm: addCommentFormReducer,
  articlesPage: articlesPageReducer,
  articlesFilters: articlesFiltersReducer,
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
