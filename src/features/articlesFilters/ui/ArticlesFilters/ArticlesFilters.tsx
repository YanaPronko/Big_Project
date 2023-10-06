import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ReducersList, useDynamicLoad } from 'shared/lib/hooks/useDynamicLoad/useDynamicLoad';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { SortOrder } from 'shared/const/types/order';

// TODO Переместить selector из pages или подумать куда его
import { articlesPageActions } from 'pages/ArticleListPages/model/slice/articlesPageSlice';

import { fetchArticlesList } from 'pages/ArticleListPages/model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { ArticlesSortField } from '../../model/types/articlesFiltersSchema';
import { articlesFiltersActions, articlesFiltersReducer } from '../../model/slice/articlesFiltersSlice';
import {
  getArticlesOrder, getArticlesSearch, getArticlesSort,
} from '../../model/selector/articlesFilters';
import { ArticleSortSelector } from '../ArticleSortSelector/ArticleSortSelector';
import cls from './ArticlesFilters.module.scss';

interface ArticlesFiltersProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesFilters: articlesFiltersReducer,
};

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
  const { className } = props;
  const { t } = useTranslation();
  useDynamicLoad(reducers, false);
  const dispatch = useAppDispatch();

  const order = useSelector(getArticlesOrder);
  const sort = useSelector(getArticlesSort);
  const search = useSelector(getArticlesSearch);
  // const type = useSelector(getArticlesType);

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
    </section>
  );
});
