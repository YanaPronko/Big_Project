import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { ArticleDetailsSchema } from 'entities/Article/model/types/articleDetailsSchema';

describe('Test ArticleDetailsSlice', () => {
  test('test fetchArticleById extra reducer, pending status', () => {
    const state: DeepPartial<ArticleDetailsSchema> = { isLoading: false };

    expect(
      articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending),
    ).toEqual({ isLoading: true });
  });
  test('test fetchArticleById extra reducer, fullfilled status', () => {
    const state: DeepPartial<ArticleDetailsSchema> = { isLoading: true };

    expect(
      articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.fulfilled),
    ).toEqual({ isLoading: false });
  });

  test('test fetchArticleById extra reducer, rejected status', () => {
    const state: DeepPartial<ArticleDetailsSchema> = { isLoading: true };

    expect(
      articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.rejected),
    ).toEqual({ isLoading: false });
  });
});
