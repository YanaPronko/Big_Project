import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

const getArticleComments =
  commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments
  ) || commentsAdapter.getInitialState();

export const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState,
  reducers: {},
});

export const { actions: articleActions } = articleDetailsCommentsSlice;
export const { reducer: articleReducer } = articleDetailsCommentsSlice;
