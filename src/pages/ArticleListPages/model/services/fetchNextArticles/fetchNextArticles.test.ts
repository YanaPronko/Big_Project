import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { fetchNextArticles } from './fetchNextArticles';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('Testing fetchNextArticles service', () => {
  // test('success fetching', async () => {
  //   const thunk = new TestAsyncThunk(fetchNextArticles, {
  //     articlesPage: {
  //       page: 2,
  //       ids: [],
  //       entities: {},
  //       limit: 5,
  //       isLoading: false,
  //       hasMore: true,
  //     },
  //   });

  //   await thunk.callAthyncThunk();

  //   expect(thunk.dispatch).toBeCalledTimes(4);
  //   expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
  // });
  test('fetchAritcleList not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticles, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callAthyncThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
