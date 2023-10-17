import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from 'entities/Article';
import { ReducersList, useDynamicLoad } from 'shared/lib/hooks/useDynamicLoad/useDynamicLoad';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticlesViewSelector } from 'features/ArticlesViewSelector';
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { Page } from 'widgets/Page/ui/Page';
import { ArticlesFilters, articlesFiltersReducer } from 'features/FiltersOfArticle';
import { HStack } from 'shared/ui/Stack';
import { initArticleListPage } from '../../model/services/initArticleListPage/initArticleListPage';
import { articlesPageActions, articlesPageReducer } from '../../model/slice/articlesPageSlice';
import {
  getArticlesPageView,
  getArticlesPageIsLoading,
} from '../../model/selectors/articles';
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import cls from './ArticleListPage.module.scss';

interface ArticleListPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesFilters: articlesFiltersReducer,
  articlesPage: articlesPageReducer,
};

const ArticleListPage: FC<ArticleListPageProps> = (props) => {
  const { className } = props;
  useDynamicLoad(reducers, false);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticleListPage(searchParams));
  });

  const view = useSelector(getArticlesPageView);
  const isLoading = useSelector(getArticlesPageIsLoading);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
    localStorage.setItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY, view);
  }, [dispatch]);

  const onLoadNextArticles = useCallback(() => {
    dispatch(fetchNextArticles());
  }, [dispatch]);

  return (
    <Page
      className={classNames(cls.articleListPage, {}, [className])}
      onScrollEnd={!isLoading ? onLoadNextArticles : undefined}
    >
      <HStack justify="between" role="section">
        <ArticlesFilters />
        <ArticlesViewSelector view={view} onViewClick={onChangeView} />
      </HStack>
      <ArticleInfiniteList isLoading={isLoading} view={view} />
    </Page>
  );
};

export default memo(ArticleListPage);
