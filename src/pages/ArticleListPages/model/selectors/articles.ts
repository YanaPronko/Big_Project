import { StateSchema } from 'app/providers/StoreProvider';
import { initialState } from '../slice/articlesPageSlice';

export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || initialState.isLoading;
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || initialState.view;
export const getArticlesPageNumber = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
