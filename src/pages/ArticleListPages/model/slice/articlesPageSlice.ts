import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article/model/types/article';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from '../../model/types/articlesPageSchema';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state?.articlesPage || articlesAdapter.getInitialState(),
);

export const initialState: ArticlesPageSchema = {
  isLoading: false,
  error: undefined,
  view: 'grid',
  ids: [],
  entities: {},
};

export const articlesPageSlice = createSlice({
  name: 'articlePage',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    ...initialState,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticlesList.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false;
          articlesAdapter.setAll(state, action.payload);
        },
      )
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;
