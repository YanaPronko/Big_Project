import { memo } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { ArticleView, ArticlesList } from "@/entities/Article";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ToggleFeatures } from "@/shared/lib/featureFlags";
import { Text } from "@/shared/ui/deprecated/Text";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";
import { PageError } from "@/widgets/PageError";

import { getArticlesPageError } from "../../model/selectors/articles";
import { getArticles } from "../../model/slice/articlesPageSlice";

import cls from './ArticleInfiniteList.module.scss';

interface ArticleInfiniteListProps {
  className?: string;
  view?: ArticleView;
  isLoading?: boolean;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className, view, isLoading } = props;

  const { t } = useTranslation("article");

  const articles = useSelector(getArticles.selectAll);
  const error = useSelector(getArticlesPageError);

  if (error) {
    return <PageError />;
  }

  if (!isLoading && !articles.length) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <TextRedesigned
            className={cls.title}
            title={t("articles-not-found")}
            bold
            size="xl"
            align="center"
          />
        }
        off={
          <Text
            className={cls.title}
            title={t("articles-not-found")}
            align="center"
          />
        }
      />
    );
  }

  return (
    <ArticlesList
      className={classNames("", {}, [className])}
      articles={articles}
      view={view}
      isLoading={isLoading}
    />
  );
});
