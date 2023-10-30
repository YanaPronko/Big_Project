import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkOptionsConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article/model/types/article';
import {
  getArticlesOrder, getArticlesPageNumber, getArticlesSearch, getArticlesSort, getArticlesType,
} from '@/features/FiltersOfArticle';
import { addQueryParams } from '@/shared/lib/addQueryParams/addQueryParams';
import { getArticlesPageLimit } from '../../selectors/articles';

interface FetchArticlesListArgs {
  replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListArgs,
  ThunkOptionsConfig<string>
>('articlesPage/fetchArticlesList', async (args, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  const limit = getArticlesPageLimit(getState());
  const page = getArticlesPageNumber(getState());
  const sort = getArticlesSort(getState());
  const order = getArticlesOrder(getState());
  const search = getArticlesSearch(getState());
  const type = getArticlesType(getState());

  try {
    addQueryParams({
      sort, order, search, type,
    });
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _page: page,
        _limit: limit,
        _order: order,
        _sort: sort,
        q: search,
        type_like: type === 'All' ? undefined : type,
      },
    });
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
