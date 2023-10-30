import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../slice/articlesFiltersSlice';

export const getArticlesOrder = (state: StateSchema) => state.articlesFilters?.order ?? initialState.order;
export const getArticlesSort = (state: StateSchema) => state.articlesFilters?.sort ?? initialState.sort;
export const getArticlesSearch = (state: StateSchema) => state.articlesFilters?.search ?? initialState.search;
export const getArticlesType = (state: StateSchema) => state.articlesFilters?.type ?? initialState.type;
export const getArticlesPageNumber = (state: StateSchema) => state.articlesFilters?.page || 1;
