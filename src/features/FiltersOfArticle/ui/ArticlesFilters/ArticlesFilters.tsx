import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticleType } from '@/entities/Article';
import { fetchArticlesList } from '@/pages/ArticleListPages';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types/order';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';

import cls from './ArticlesFilters.module.scss';

import {
  getArticlesOrder, getArticlesSearch, getArticlesSort, getArticlesType,
} from '../../model/selector/articlesFilters';
import { articlesFiltersActions } from '../../model/slice/articlesFiltersSlice';
import { ArticlesSortField } from '../../model/types/articlesFiltersSchema';
import { ArticleSortSelector } from '../ArticleSortSelector/ArticleSortSelector';
import { ArticlesTypesTabs } from '../ArticlesTypesTabs/ArticlesTypesTabs';

interface ArticlesFiltersProps {
  className?: string;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();

  const order = useSelector(getArticlesOrder);
  const sort = useSelector(getArticlesSort);
  const search = useSelector(getArticlesSearch);
  const type = useSelector(getArticlesType);

  const fetchDataByFilters = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchDataByFilters = useDebounce(fetchDataByFilters, 500);

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlesFiltersActions.setOrder(newOrder));
    dispatch(articlesFiltersActions.setPage(1));
    fetchDataByFilters();
  }, [dispatch, fetchDataByFilters]);

  const onChangeSort = useCallback((newSort: ArticlesSortField) => {
    dispatch(articlesFiltersActions.setSort(newSort));
    dispatch(articlesFiltersActions.setPage(1));
    fetchDataByFilters();
  }, [dispatch, fetchDataByFilters]);

  const onChangeSearch = useCallback((newSearch: string) => {
    dispatch(articlesFiltersActions.setSearch(newSearch));
    dispatch(articlesFiltersActions.setPage(1));
    debouncedFetchDataByFilters();
  }, [dispatch, debouncedFetchDataByFilters]);

  const onChangeType = useCallback((value: ArticleType) => {
    dispatch(articlesFiltersActions.setType(value));
    dispatch(articlesFiltersActions.setPage(1));
    fetchDataByFilters();
  }, [dispatch, fetchDataByFilters]);

  return (
    <section className={classNames(cls.articlesFilters, {}, [className])}>
      <ArticleSortSelector
        order={order}
        sort={sort}
        onChangeOrder={onChangeOrder}
        onChangeSort={onChangeSort}
      />
      <Card className={cls.search}>
        <Input
          placeholder={t('search')}
          value={search}
          onChange={onChangeSearch}
        />
      </Card>
      <ArticlesTypesTabs value={type} onChangeType={onChangeType} />
    </section>
  );
});
