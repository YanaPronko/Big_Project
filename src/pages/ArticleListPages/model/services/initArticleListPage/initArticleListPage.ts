import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkOptionsConfig } from 'app/providers/StoreProvider';
import { ArticleType, ArticleView } from 'entities/Article';
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { SortOrder } from 'shared/const/types/order';
import { articlesFiltersActions } from 'features/FiltersOfArticle';
import { ArticlesSortField } from 'features/FiltersOfArticle/model/types/articlesFiltersSchema';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { getArticlesPageInited } from '../../selectors/articles';

export const initArticleListPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkOptionsConfig<string>
>('articlesPage/initArticleListPage', async (searchParams, thunkApi) => {
  const { dispatch, getState } = thunkApi;

  const inited = getArticlesPageInited(getState());

  if (!inited) {
    searchParams.forEach((value, key) => {
      if (key) {
        // eslint-disable-next-line default-case
        switch (key) {
          case 'sort':
            dispatch(articlesFiltersActions.setSort(value as ArticlesSortField));
            break;
          case 'order':
            dispatch(articlesFiltersActions.setOrder(value as SortOrder));
            break;
          case 'search':
            dispatch(articlesFiltersActions.setSearch(value));
            break;
          case 'type':
            dispatch(articlesFiltersActions.setType(value as ArticleType));
            break;
        }
      }
    });
    const LSView = localStorage.getItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY) as ArticleView || 'grid';
    const limit = LSView === 'grid' ? 9 : 4;
    dispatch(articlesPageActions.setView(LSView));
    dispatch(articlesPageActions.setLimit(limit));
    dispatch(fetchArticlesList({}));
    dispatch(articlesPageActions.setInited(true));
  }
});
