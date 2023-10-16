import { ArticleType } from 'entities/Article';
import { SortOrder } from 'shared/types/order';

export type ArticlesSortField = 'title' | 'views' | 'createdAt';

export interface ArticlesFiltersSchema {
  order: SortOrder;
  sort: ArticlesSortField;
  search: string;
  type: ArticleType;
}
