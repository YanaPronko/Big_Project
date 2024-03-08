import { memo } from "react";

import { nanoid } from "@reduxjs/toolkit";
import { useTranslation } from "react-i18next";

import { ArticlesList, ArticleListItemSkeleton } from "@/entities/Article";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ToggleFeatures } from "@/shared/lib/featureFlags";
import { Text } from "@/shared/ui/deprecated/Text";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";

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
        <ToggleFeatures feature="isAppRedesigned"
          off={<Text
            title={t("failed-loading-of-recommendations")}
            theme="error"
            size="l"
            />
          }
          on={
            <TextRedesigned
              title={t("failed-loading-of-recommendations")}
              variant="error"
              size="l"
            />
          }
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
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<TextRedesigned size="l" title={t("recommendations")} />}
          off={<Text size="l" title={t("recommendations")} />}
        />

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
