import { memo, useCallback } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { RatingCard } from "@/entities/Rating";
import { getUserAuthData } from "@/entities/User";
import { ToggleFeatures, toggleFeatures } from "@/shared/lib/featureFlags";
import { Skeleton as SkeletonDeprecated} from "@/shared/ui/deprecated/Skeleton";
import { Text } from "@/shared/ui/deprecated/Text";
import { SkeletonRedesigned } from "@/shared/ui/redesigned/Skeleton";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";

import {
  useArticleRate,
  useGetArticleRating,
} from "../../api/articleRatingApi";

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation(["article", "translation"]);

  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? "",
  });
  const [rateArticle, { error }] = useArticleRate();

  const Skeleton = toggleFeatures({
    name: "isAppRedesigned",
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      rateArticle({
        articleId,
        userId: userData?.id ?? "",
        rate: starsCount,
        feedback,
      });
    },
    [articleId, rateArticle, userData?.id],
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle],
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle],
  );

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  if (error) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
          <Text
            theme="error"
            text={t("oops-failed-rate-of-article")}
            align="center"
            size="l"
          />
        }
        on={
          <TextRedesigned
            variant="error"
            text={t("oops-failed-rate-of-article")}
            align="center"
            size="l"
          />
        }
      />
    );
  }

  const rating = data?.[0]?.rate;
  return (
    <RatingCard
      className={className}
      title={t("rate-the-article")}
      feedbackTitle={t("leave-your-feedback", { ns: "translation" })}
      rate={rating}
      onCancel={onCancel}
      onAccept={onAccept}
    />
  );
});

export default ArticleRating;
