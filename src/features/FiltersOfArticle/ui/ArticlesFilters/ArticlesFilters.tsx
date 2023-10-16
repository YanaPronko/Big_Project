import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { SortOrder } from 'shared/types/order';

// TODO Переместить selector из pages или подумать куда его
import { articlesPageActions } from 'pages/ArticleListPages/model/slice/articlesPageSlice';
import { fetchArticlesList } from 'pages/ArticleListPages/model/services/fetchArticlesList/fetchArticlesList';

import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { ArticleType } from 'entities/Article';
import { ArticleSortSelector } from '../ArticleSortSelector/ArticleSortSelector';
import { articlesFiltersActions } from '../../model/slice/articlesFiltersSlice';
import { ArticlesSortField } from '../../model/types/articlesFiltersSchema';
import {
  getArticlesOrder, getArticlesSearch, getArticlesSort, getArticlesType,
} from '../../model/selector/articlesFilters';
import cls from './ArticlesFilters.module.scss';
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
    dispatch(articlesPageActions.setPage(1));
    fetchDataByFilters();
  }, [dispatch, fetchDataByFilters]);

  const onChangeSort = useCallback((newSort: ArticlesSortField) => {
    dispatch(articlesFiltersActions.setSort(newSort));
    dispatch(articlesPageActions.setPage(1));
    fetchDataByFilters();
  }, [dispatch, fetchDataByFilters]);

  const onChangeSearch = useCallback((newSearch: string) => {
    dispatch(articlesFiltersActions.setSearch(newSearch));
    dispatch(articlesPageActions.setPage(1));
    debouncedFetchDataByFilters();
  }, [dispatch, debouncedFetchDataByFilters]);

  const onChangeType = useCallback((value: ArticleType) => {
    dispatch(articlesFiltersActions.setType(value));
    dispatch(articlesPageActions.setPage(1));
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
