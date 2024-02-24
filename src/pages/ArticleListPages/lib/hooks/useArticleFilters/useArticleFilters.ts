import { fetchArticlesList } from '../../../model/services/fetchArticlesList/fetchArticlesList';
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { articlesFiltersActions, ArticlesSortField, getArticlesOrder, getArticlesSearch, getArticlesSort, getArticlesType } from '@/features/FiltersOfArticle';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types/order';
import { ArticleType, ArticleView } from '@/entities/Article';
import { articlesPageActions } from '@/pages/ArticleListPages/model/slice/articlesPageSlice';
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';
import { getArticlesPageView } from '@/pages/ArticleListPages/model/selectors/articles';

export function useArticleFilters() {
  const order = useSelector(getArticlesOrder);
  const sort = useSelector(getArticlesSort);
  const search = useSelector(getArticlesSearch);
  const type = useSelector(getArticlesType);
  const view = useSelector(getArticlesPageView);

  const dispatch = useAppDispatch();

  const fetchDataByFilters = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchDataByFilters = useDebounce(fetchDataByFilters, 500);

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesFiltersActions.setOrder(newOrder));
      dispatch(articlesFiltersActions.setPage(1));
      fetchDataByFilters();
    },
    [dispatch, fetchDataByFilters],
  );

  const onChangeSort = useCallback(
    (newSort: ArticlesSortField) => {
      dispatch(articlesFiltersActions.setSort(newSort));
      dispatch(articlesFiltersActions.setPage(1));
      fetchDataByFilters();
    },
    [dispatch, fetchDataByFilters],
  );

  const onChangeSearch = useCallback(
    (newSearch: string) => {
      dispatch(articlesFiltersActions.setSearch(newSearch));
      dispatch(articlesFiltersActions.setPage(1));
      debouncedFetchDataByFilters();
    },
    [dispatch, debouncedFetchDataByFilters],
  );

  const onChangeType = useCallback(
    (value: ArticleType) => {
      dispatch(articlesFiltersActions.setType(value));
      dispatch(articlesFiltersActions.setPage(1));
      fetchDataByFilters();
    },
    [dispatch, fetchDataByFilters],
  );

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
      localStorage.setItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY, view);
    },
    [dispatch],
  );

  return {
    view,
    sort,
    order,
    search,
    type,
    onChangeView,
    onChangeSort,
    onChangeOrder,
    onChangeSearch,
    onChangeType,
  };
}