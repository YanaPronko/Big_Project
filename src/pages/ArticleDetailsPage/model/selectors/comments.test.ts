import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsCommentsError, getArticleDetailsCommentsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/comments';

describe('Testing comments selectors', () => {
  test('Testing getArticleDetailsCommentsIsLoading selector', () => {
    const state: DeepPartial<StateSchema> = { articleDetailsComments: { isLoading: true } };
    expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(true);
  });
  test('Testing getArticleDetailsCommentsIsLoading selector without state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(undefined);
  });
  test('Testing getArticleDetailsCommentsError selector', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: { error: 'error' },
    };
    expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual(
      'error',
    );
  });
  test('Testing getArticleDetailsCommentsIsLoading selector without state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual(
      undefined,
    );
  });
});
