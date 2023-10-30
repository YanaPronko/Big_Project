import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetailsCommentsIsLoading = (state: StateSchema) => state.comments?.isLoading;
export const getArticleDetailsCommentsError = (state: StateSchema) => state.comments?.error;
