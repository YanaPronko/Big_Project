import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView, ArticlesList } from 'entities/Article';
import { ReducersList, useDynamicLoad } from 'shared/lib/hooks/useDynamicLoad/useDynamicLoad';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageError } from 'widgets/PageError';
import { ArticlesViewSelector } from 'features/ArticlesViewSelector';
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { Page } from 'widgets/Page/ui/Page';
import { Text } from 'shared/ui/Text/Text';
import { ArticlesFilters, articlesFiltersReducer } from 'features/FiltersOfArticle';
import { initArticleListPage } from '../../model/services/initArticleListPage/initArticleListPage';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice';
import {
  getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView,
} from '../../model/selectors/articles';
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles';
import cls from './ArticleListPage.module.scss';

interface ArticleListPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
  articlesFilters: articlesFiltersReducer,
};

const ArticleListPage: FC<ArticleListPageProps> = (props) => {
  const { className } = props;
  useDynamicLoad(reducers, false);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const { t } = useTranslation('article');

  useInitialEffect(() => {
    dispatch(initArticleListPage(searchParams));
  });

  const articles = useSelector(getArticles.selectAll);
  const error = useSelector(getArticlesPageError);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
    localStorage.setItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY, view);
  }, [dispatch]);

  const onLoadNextArticles = useCallback(() => {
    dispatch(fetchNextArticles());
  }, [dispatch]);

  if (error) {
    return <PageError />;
  }

  if (!isLoading && !articles.length) {
    return <Text title={t('articles-not-found')} />;
  }

  return (
    <Page
      className={classNames(cls.articleListPage, {}, [className])}
      onScrollEnd={onLoadNextArticles}
    >
      <div className={cls.filtersWrapper}>
        <ArticlesFilters />
        <ArticlesViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <ArticlesList articles={articles} view={view} isLoading={isLoading} />
    </Page>
  );
};

export default memo(ArticleListPage);
