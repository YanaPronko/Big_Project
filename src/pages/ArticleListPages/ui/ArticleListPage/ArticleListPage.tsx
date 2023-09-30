import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView, ArticlesList } from 'entities/Article';
import { ReducersList, useDynamicLoad } from 'shared/lib/hooks/useDynamicLoad/useDynamicLoad';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageError } from 'widgets/PageError';
import { ArticlesViewSelector } from 'features/ArticlesViewSelector';
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articles';
import cls from './ArticleListPage.module.scss';

interface ArticleListPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticleListPage: FC<ArticleListPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  useDynamicLoad(reducers, true);

  useInitialEffect(() => {
    const LSView = localStorage.getItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY) as ArticleView || 'grid';
    dispatch(articlesPageActions.setView(LSView));
  }, []);

  useInitialEffect(() => {
    dispatch(fetchArticlesList);
  }, []);

  const articles = useSelector(getArticles.selectAll);
  const error = useSelector(getArticlesPageError);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
    localStorage.setItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY, view);
  }, [dispatch]);

  if (error) {
    return <PageError />;
  }

  return (
    <div className={classNames(cls.articleListPage, {}, [className])}>
      <h1>{t('article-list-page')}</h1>
      <ArticlesViewSelector view={view} onViewClick={onChangeView} />
      <ArticlesList articles={articles} view={view} isLoading={isLoading} />
    </div>
  );
};

export default memo(ArticleListPage);
