import { FC, memo, useCallback } from "react";

import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { ArticleView } from "@/entities/Article";
import { ArticlePageGreeting } from "@/features/ArticlePageGreeting";
import { ArticlesViewSelector } from "@/features/ArticlesViewSelector";
import {
  ArticlesFilters,
  articlesFiltersReducer,
} from "@/features/FiltersOfArticle";
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from "@/shared/const/localStorage";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  ReducersList,
  useDynamicLoad,
} from "@/shared/lib/hooks/useDynamicLoad/useDynamicLoad";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";

import { Page } from "@/widgets/Page";

import {
  getArticlesPageView,
  getArticlesPageIsLoading,
} from "../../model/selectors/articles";
import { fetchNextArticles } from "../../model/services/fetchNextArticles/fetchNextArticles";
import { initArticleListPage } from "../../model/services/initArticleListPage/initArticleListPage";
import {
  articlesPageActions,
  articlesPageReducer,
} from "../../model/slice/articlesPageSlice";
import { ArticleInfiniteList } from "../ArticleInfiniteList/ArticleInfiniteList";

import cls from "./ArticleListPage.module.scss";
import { ToggleFeatures } from "@/shared/lib/featureFlags";
import { StickyContentLayout } from "@/shared/layouts/StickyLayout";
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';
import { HStack } from "@/shared/ui/redesigned/Stack";
import { ViewSelectorContainer } from "../ViewSelectorContainer/ViewSelectorContainer";
import { useArticleFilters } from "../../lib/hooks/useArticleFilters/useArticleFilters";

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

  const { view, onChangeView } = useArticleFilters();
  const isLoading = useSelector(getArticlesPageIsLoading);

  const onLoadNextArticles = useCallback(() => {
    dispatch(fetchNextArticles());
  }, [dispatch]);

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <StickyContentLayout
          left={<ViewSelectorContainer/>}
          content={
            <Page
              data-testid="ArticleListPage"
              className={classNames(cls.ArticlesPageRedesigned, {}, [
                className,
              ])}
              onScrollEnd={!isLoading ? onLoadNextArticles : undefined}
            >
              <ArticleInfiniteList isLoading={isLoading} view={view} />
              <ArticlePageGreeting />
            </Page>
          }
          right={<FiltersContainer/>}
        />
      }
      off={
        <Page
          data-testid="ArticleListPage"
          className={classNames(cls.articleListPage, {}, [className])}
          onScrollEnd={!isLoading ? onLoadNextArticles : undefined}
        >
          <HStack justify="between" role="section">
            <ArticlesFilters />
            <ArticlesViewSelector view={view} onViewClick={onChangeView} />
          </HStack>
          <ArticleInfiniteList isLoading={isLoading} view={view} />
          <ArticlePageGreeting />
        </Page>
      }
    />
  );

  return content;
};

export default memo(ArticleListPage);
