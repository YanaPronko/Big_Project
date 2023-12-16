import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';

import { initArticleListPage } from './initArticleListPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');
const searchParams = new URLSearchParams(
  'sort=views&order=asc&search=&type=All',
);

describe('fetchNextArticlesPage.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(initArticleListPage, {
      articlesPage: {
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: false,
      },
      articlesFilters: {
        page: 2,
      },
    });

    await thunk.callAthyncThunk(searchParams);

    expect(fetchArticlesList).toHaveBeenCalledWith({});
  });

  test('fetchAritcleList not called', async () => {
    const thunk = new TestAsyncThunk(initArticleListPage, {
      articlesPage: {
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
        _inited: true,
      },
      articlesFilters: {
        page: 1,
      },
    });

    await thunk.callAthyncThunk(searchParams);
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
