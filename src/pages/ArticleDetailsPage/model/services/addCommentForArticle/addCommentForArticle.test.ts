import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { StateSchema } from 'app/providers/StoreProvider';

const comment = {
  id: '1',
  text: 'test comment',
  articleId: '1',
  userId: '1',
};

const state: DeepPartial<StateSchema> = {
  articleDetails: { data: { id: '1' } },
  user: { authData: { id: '1' } },
};

describe('Testing athyncThunk: addCommentForArticle', () => {
  test('success adding of comment for article', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, state);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: comment }));
    const result = await thunk.callAthyncThunk('test comment');

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(comment);
  });

  test('failed adding of comment for article with no data', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, state);
    thunk.api.put.mockReturnValue(Promise.resolve({ data: comment }));
    const result = await thunk.callAthyncThunk('');

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('no data');
  });

  test('failed adding of comment for article with error', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle);
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callAthyncThunk('');

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('error');
  });
});
