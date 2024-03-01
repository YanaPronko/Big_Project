import { FC, memo } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  ArticleDetails,
  // articleDetailsReducer,
  getArtcileDetailsError,
  getArtcileDetailsIsLoading,
} from "@/entities/Article";
import { ArticleRating } from "@/features/ArticleRating";
import { ArticleRecommendationsList } from "@/features/ArticleRecommendationsList";
import { StickyContentLayout } from "@/shared/layouts/StickyLayout";
import { classNames } from "@/shared/lib/classNames/classNames";
// import {
//   ReducersList,
//   useDynamicLoad,
// } from "@/shared/lib/hooks/useDynamicLoad/useDynamicLoad";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";
import { Page } from "@/widgets/Page";

import { AdditionalInfoContainer } from "../../AdditionalInfoContainer/AdditionalInfoContainer";
// import { articleDetailsCommentsReducer } from "../../../model/slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice";
import { ArticleDetailsComments } from "../../ArticleDetailsComments/ArticleDetailsComments";
import { DetailsContainer } from "../../DetailsContainer/DetailsContainer";
import { CardRedesigned } from "@/shared/ui/redesigned/Card";

interface ArticleDetailsPageProps {
  className?: string;
}

// const reducers: ReducersList = {
//   comments: articleDetailsCommentsReducer,
//   articleDetails: articleDetailsReducer,
// };

const ArticleDetailsPageRedesigned: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation("article");
  const { id } = useParams<string>();

  // useDynamicLoad(reducers, true);

  // Page
  const isLoadingArticle = useSelector(getArtcileDetailsIsLoading);
  const error = useSelector(getArtcileDetailsError);

  if (!id) {
    return <TextRedesigned title={t("article-not-found")} bold />;
  }

  if (isLoadingArticle) {
    return <ArticleDetails isLoading={isLoadingArticle} />;
  }

  if (error) {
    return <ArticleDetails error={error} />;
  }

  return (
    <StickyContentLayout
      content={
        <Page className={classNames("", {}, [className])}>
          <CardRedesigned max padding="24" borderRadius="round">
            <VStack gap="16" max align="stretch">
              <DetailsContainer />
              <ArticleRating articleId={id} />
              <ArticleRecommendationsList />
              <ArticleDetailsComments id={id} />
            </VStack>
          </CardRedesigned>
        </Page>
      }
      right={<AdditionalInfoContainer />}
    />
  );
};

export default memo(ArticleDetailsPageRedesigned);
