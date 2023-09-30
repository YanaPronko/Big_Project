import { StateSchema } from 'app/providers/StoreProvider';
import { initialState } from '../slice/articlesPageSlice';

export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || initialState.isLoading;
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || initialState.view;
