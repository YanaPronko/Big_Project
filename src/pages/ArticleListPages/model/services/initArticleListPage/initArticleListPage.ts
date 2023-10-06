import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkOptionsConfig } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { getArticlesPageInited } from '../../selectors/articles';

export const initArticleListPage = createAsyncThunk<
  void,
  void,
  ThunkOptionsConfig<string>
>('articlesPage/initArticleListPage', async (_, thunkApi) => {
  const { dispatch, getState } = thunkApi;

  const _inited = getArticlesPageInited(getState());
  if (!_inited) {
    const LSView = localStorage.getItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY) as ArticleView || 'grid';
    const limit = LSView === 'grid' ? 9 : 4;
    dispatch(articlesPageActions.setView(LSView));
    dispatch(articlesPageActions.setLimit(limit));
    dispatch(fetchArticlesList({ replace: true }));
    dispatch(articlesPageActions.setInited(true));
  }
});
