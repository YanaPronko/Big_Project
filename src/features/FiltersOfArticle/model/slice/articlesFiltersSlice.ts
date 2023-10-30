import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SortOrder } from '@/shared/types/order';
import { ArticleType } from '@/entities/Article';
import { ArticlesFiltersSchema, ArticlesSortField } from '../types/articlesFiltersSchema';

export const initialState: ArticlesFiltersSchema = {
  order: 'asc',
  sort: 'views',
  search: '',
  type: 'All',
  page: 1,
};

export const articlesFiltersSlice = createSlice({
  name: 'articlesFilters',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticlesSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
  },
});

export const { reducer: articlesFiltersReducer } = articlesFiltersSlice;
export const { actions: articlesFiltersActions } = articlesFiltersSlice;
