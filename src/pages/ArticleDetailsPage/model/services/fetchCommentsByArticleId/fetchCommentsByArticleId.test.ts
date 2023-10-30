import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { Comment } from '@/entities/Comment';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

const data: Comment[] = [
  {
    id: '1',
    text: 'some comment',
    articleId: '1',
    user: { id: '1', username: 'Yana' },
  },
  {
    id: '2',
    text: 'some comment 2',
    articleId: '1',
    user: { id: '2', username: 'Vasia' },
  },
];

describe('Testing athyncThunk: fetchCommentsByArticleId', () => {
  test('success fetch of articles\'s comments', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callAthyncThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test("failed fetch of articles's comments with no article id", async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callAthyncThunk('');

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('no article id');
  });

  test('failed fetch of of articles\'s comments with error', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callAthyncThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('error');
  });
});
