import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkOptionsConfig } from "@/app/providers/StoreProvider";
import {
  articlesFiltersActions,
  getArticlesPageNumber,
} from "@/features/FiltersOfArticle";

import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
} from "../../selectors/articles";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

export const fetchNextArticles = createAsyncThunk<
  void,
  void,
  ThunkOptionsConfig<string>
>("articlesPage/fetchNextArticles", async (_, thunkApi) => {
  const { dispatch, getState } = thunkApi;

  const page = getArticlesPageNumber(getState());
  const hasMore = getArticlesPageHasMore(getState());
  const isLoading = getArticlesPageIsLoading(getState());

  if (hasMore && !isLoading) {
    dispatch(articlesFiltersActions.setPage(page + 1));
    dispatch(fetchArticlesList({ replace: false }));
  }
});
