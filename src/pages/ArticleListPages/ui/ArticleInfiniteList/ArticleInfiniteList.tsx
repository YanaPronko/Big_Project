import { memo } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { ArticleView, ArticlesList } from "@/entities/Article";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui/Text";
import { PageError } from "@/widgets/PageError";

import { getArticlesPageError } from "../../model/selectors/articles";
import { getArticles } from "../../model/slice/articlesPageSlice";

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
    return <Text title={t("articles-not-found")} />;
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
