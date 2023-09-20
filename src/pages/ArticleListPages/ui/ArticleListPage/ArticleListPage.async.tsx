import { lazy } from 'react';

export const ArticleListPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./ArticleListPage')), 1500);
}));
