import { memo } from "react";

import { nanoid } from "@reduxjs/toolkit";
import { useTranslation } from "react-i18next";

import { ArticlesList, ArticleListItemSkeleton } from "@/entities/Article";
import { classNames } from "@/shared/lib/classNames/classNames";
import { HStack, VStack } from "@/shared/ui/deprecated/Stack";
import { Text } from "@/shared/ui/deprecated/Text";

import { useGetArticleRecommendations } from "../../api/articleRecommendationsApi";

import cls from "./ArticleRecommendationsList.module.scss";

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation("article");
    const limit = 4;

    const {
      isLoading,
      error,
      data: recommendations,
    } = useGetArticleRecommendations(limit);

    if (isLoading) {
      return (
        <HStack gap="8">
          {new Array(limit).fill(0).map((_) => (
            <ArticleListItemSkeleton view="grid" key={nanoid()} />
          ))}
        </HStack>
      );
    }

    if (error || !recommendations) {
      return (
        <Text
          title={t("failed-loading-of-recommendations")}
          theme="error"
          size="l"
        />
      );
    }
    return (
      <VStack
        data-testid="ArticleRecommendationsList"
        gap="16"
        align="stretch"
        className={classNames("", {}, [className])}
      >
        <Text title={t("recommendations")} />
        <ArticlesList
          articles={recommendations}
          isLoading={isLoading}
          target="_blank"
          className={cls.recommendations}
        />
      </VStack>
    );
  },
);
