import { memo } from "react";

import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { classNames } from "@/shared/lib/classNames/classNames";

import { VStack } from "@/shared/ui/redesigned/Stack";

import { getArtcileDetailsData } from "../../../model/selectors/articleDetails";

import { renderBlock } from "../renderArticleBlocks";
import { SkeletonRedesigned } from "@/shared/ui/redesigned/Skeleton";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";
import { AppImage } from "@/shared/ui/redesigned/AppImage";

import cls from "./ArticleDetails.module.scss";

interface ArticleDetailsProps {
  className?: string;
  isLoading?: boolean;
  error?: string;
}



export const ArticleDetailsRedesigned = memo((props: ArticleDetailsProps) => {
  const { className, isLoading, error } = props;

  const article = useSelector(getArtcileDetailsData);

  let content;

  if (isLoading) {
    content = (
      <VStack
        data-testid="ArticleDetails.Loading"
        gap="32"
        max
        className={classNames(cls.articleDetails, {}, [className])}
      >
        <SkeletonRedesigned
          className={cls.avatar}
          width={200}
          height={200}
          borderRadius="50%"
          key={nanoid()}
        />
        <SkeletonRedesigned width={300} height={32} key={nanoid()} />
        <SkeletonRedesigned width={600} height={24} key={nanoid()} />
        <SkeletonRedesigned width="100%" height={200} key={nanoid()} />
        <SkeletonRedesigned width="100%" height={200} key={nanoid()} />
      </VStack>
    );
  } else if (error) {
    content = (
      <TextRedesigned
        title="Fetching of article is failed"
        variant="error"
        align="center"
      />
    );
  } else {
    content = (
      <VStack
        data-testid="ArticleDetails.Content"
        gap="8"
        max
        className={classNames("", {}, [className])}
        role="article"
      >
        <TextRedesigned title={article?.title} size="l" bold />
        <TextRedesigned title={article?.subtitle} />
        <AppImage
          fallback={<SkeletonRedesigned width="100%" height={420} borderRadius="16px" />}
          src={article?.img}
          className={cls.img}
        />
        {article?.blocks.map(renderBlock)}
      </VStack>
    );
  }

  return content;
});
