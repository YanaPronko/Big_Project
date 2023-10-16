import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { initArticleListPage } from './initArticleListPage';

jest.mock('../fetchArticlesList/fetchArticlesList');
const searchParams = new URLSearchParams(
  'sort=views&order=asc&search=&type=All',
);

describe('fetchNextArticlesPage.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(initArticleListPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: false,
      },
    });

    await thunk.callAthyncThunk(searchParams);

    expect(fetchArticlesList).toHaveBeenCalledWith({});
  });

  test('fetchAritcleList not called', async () => {
    const thunk = new TestAsyncThunk(initArticleListPage, {
      articlesPage: {
        page: 1,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
        _inited: true,
      },
    });

    await thunk.callAthyncThunk(searchParams);
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
