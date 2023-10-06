import { ArticleType } from 'entities/Article';
import { ReactNode } from 'react';
import { SortOrder } from 'shared/const/types/order';

export type ArticlesSortField = 'title' | 'views' | 'createdAt';

export interface TabItem {
  value: string;
  content: ReactNode;
}

export interface ArticlesFiltersSchema {
  order: SortOrder;
  sort: ArticlesSortField;
  search: string;
  type: ArticleType;
}
