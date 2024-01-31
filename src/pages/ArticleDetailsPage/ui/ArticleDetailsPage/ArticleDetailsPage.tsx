import { FC, memo } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  ArticleDetails,
  articleDetailsReducer,
  fetchArticleById,
  getArtcileDetailsError,
  getArtcileDetailsIsLoading,
} from "@/entities/Article";
import { ArticleRating } from "@/features/ArticleRating";
import { ArticleRecommendationsList } from "@/features/ArticleRecommendationsList";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  ReducersList,
  useDynamicLoad,
} from "@/shared/lib/hooks/useDynamicLoad/useDynamicLoad";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { Page } from "@/widgets/Page";

import { articleDetailsCommentsReducer } from "../../model/slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { getFeatureFlags, toggleFeatures } from "@/shared/lib/featureFlags";
import { Card } from "@/shared/ui/Card";



interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  comments: articleDetailsCommentsReducer,
  articleDetails: articleDetailsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation("article");
  const { id } = useParams<string>();
  const dispatch = useAppDispatch();

  useDynamicLoad(reducers, true);
  useInitialEffect(() => {
    if (id) {
      dispatch(fetchArticleById(id));
    }
  });

    if (!id) {
      return null;
    }

  const articleRating = toggleFeatures({
    name: "isArticleRatingEnabled",
    on: () => <ArticleRating articleId={id} />,
    off: () => (<Card>{t('rating-will-be-here-asap')}</Card>),
  });

  // Page
  const isLoadingArticle = useSelector(getArtcileDetailsIsLoading);
  const error = useSelector(getArtcileDetailsError);

  if (!id) {
    return <Text title={t("article-not-found")} />;
  }

  if (isLoadingArticle) {
    return <ArticleDetails isLoading={isLoadingArticle} />;
  }

  if (error) {
    return <ArticleDetails error={error} />;
  }

  return (
    <Page className={classNames("", {}, [className])}>
      <VStack gap="32" align="stretch">
        <ArticleDetailsPageHeader />
        <ArticleDetails />
        {articleRating}
        <ArticleRecommendationsList />
        <ArticleDetailsComments id={id} />
      </VStack>
    </Page>
  );
};

export default memo(ArticleDetailsPage);
