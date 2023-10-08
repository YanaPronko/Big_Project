import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsCommentsIsLoading = (state: StateSchema) => state.articleDetailsPage?.comments.isLoading;
export const getArticleDetailsCommentsError = (state: StateSchema) => state.articleDetailsPage?.comments.error;
