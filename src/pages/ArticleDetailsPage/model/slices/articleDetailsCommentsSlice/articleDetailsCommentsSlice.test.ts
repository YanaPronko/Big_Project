import { Comment } from 'entities/Comment';
import { articleDetailsCommentsReducer } from '../../slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice';
import { ArticleDetailsCommentsSchema } from '../../types/articleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const entities = {
  1: {
    id: '1',
    text: 'some comment',
    user: {
      avatar: 'https://avatars.githubusercontent.com/u/116818633',
      id: '1',
      username: 'admin',
    },
    articleId: '1',
  },
  2: {
    id: '2',
    text: 'some comment',
    user: {
      avatar: 'https://avatars.githubusercontent.com/u/116818633',
      id: '1',
      username: 'admin',
    },
    articleId: '1',
  },
};
const ids = ['1', '2'];

const comment: Comment[] = [
  {
    id: '1',
    text: 'some comment',
    user: {
      avatar: 'https://avatars.githubusercontent.com/u/116818633',
      id: '1',
      username: 'admin',
    },
    articleId: '1',
  },
  {
    id: '2',
    text: 'some comment',
    user: {
      avatar: 'https://avatars.githubusercontent.com/u/116818633',
      id: '1',
      username: 'admin',
    },
    articleId: '1',
  },
];

describe('Test articleDetailsCommentsSlice', () => {
  test('test fetchCommentsByArticleId pending', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: false,
      error: undefined,
    };
    expect(
      articleDetailsCommentsReducer(
        state as ArticleDetailsCommentsSchema,
        fetchCommentsByArticleId.pending,
      ),
    ).toEqual({
      isLoading: true,
      error: undefined,
    });
  });
  test('test fetchCommentsByArticleId fullfiled', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: true,
      error: undefined,
    };
    expect(
      articleDetailsCommentsReducer(
        state as ArticleDetailsCommentsSchema,
        fetchCommentsByArticleId.fulfilled(comment, '', ''),
      ),
    ).toEqual({
      isLoading: false,
      error: undefined,
      entities,
      ids,
    });
  });
  test('test fetchCommentsByArticleId rejected', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: true,
    };
    expect(
      articleDetailsCommentsReducer(
        state as ArticleDetailsCommentsSchema,
        fetchCommentsByArticleId.rejected,
      ),
    ).toEqual({ isLoading: false });
  });
});
