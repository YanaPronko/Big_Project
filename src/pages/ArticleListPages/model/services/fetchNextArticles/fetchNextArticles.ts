import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkOptionsConfig } from 'app/providers/StoreProvider';
import {
  getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageNumber,
} from '../../selectors/articles';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slice/articlesPageSlice';

export const fetchNextArticles = createAsyncThunk<
  void,
  void,
  ThunkOptionsConfig<string>
>('articlesPage/fetchNextArticles', async (_, thunkApi) => {
  const { dispatch, getState } = thunkApi;

  const page = getArticlesPageNumber(getState());
  const hasMore = getArticlesPageHasMore(getState());
  const isLoading = getArticlesPageIsLoading(getState());

  if (hasMore && !isLoading) {
    dispatch(articlesPageActions.setPage(page + 1));
    dispatch(fetchArticlesList({
      page: page + 1,
    }));
  }
});
