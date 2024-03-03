import { memo } from "react";

import { useTranslation } from "react-i18next";

import { getRouteArticleDetails } from "@/shared/const/AppRoutes";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppImage } from "@/shared/ui/redesigned/AppImage";
import { AppLinkRedesigned } from "@/shared/ui/redesigned/AppLink";
import { AvatarRedesigned } from "@/shared/ui/redesigned/Avatar";
import { ButtonRedesigned } from "@/shared/ui/redesigned/Button";
import { CardRedesigned } from "@/shared/ui/redesigned/Card";
import { EyeIconRedesigned } from "@/shared/ui/redesigned/Icons";
import { SkeletonRedesigned } from "@/shared/ui/redesigned/Skeleton";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";

import { ArticleTextBlock } from "../../../model/types/article";
import { ArticleListItemProps } from "../../../model/types/articleListItem";

import cls from "./ArticleListItem.module.scss";

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
  const { className, view, article, target } = props;
  const { t } = useTranslation("article");

  let content;
  const userInfo = (
    <>
      <AvatarRedesigned
        size={32}
        alt={article.user.username}
        src={article.user.avatar}
        className={cls.avatar}
      />
      <TextRedesigned bold text={article.user.username} />
    </>
  );
  const views = (
    <HStack gap="8">
      <EyeIconRedesigned />
      <TextRedesigned text={String(article.views)} className={cls.views} />
    </HStack>
  );

  const title = (
    <TextRedesigned title={article.title} className={cls.title} bold />
  );
  const subtitle = <TextRedesigned title={article.subtitle} size="s" />;
  const date = <TextRedesigned text={article.createdAt} className={cls.date} />;
  const imgGrid = (
    <AppImage
      src={article.img}
      alt={article.title}
      className={cls.img}
      fallback={<SkeletonRedesigned height="200px" width="240px" />}
    />
  );
  const imgList = (
    <AppImage
      src={article.img}
      alt={article.title}
      className={cls.img}
      fallback={<SkeletonRedesigned height="250px" width="100%" />}
    />
  );

  const textBlock = article.blocks.find(
    (block) => block.type === "TEXT",
  ) as ArticleTextBlock;

  if (view === "grid") {
    content = (
      <AppLinkRedesigned
        to={getRouteArticleDetails(article.id)}
        target={target}
      >
        <CardRedesigned
          className={cls.cardItem}
          borderRadius="round"
          padding="0"
        >
          {imgGrid}
          <VStack className={cls.infoWrapper} gap="4">
            {title}
            <VStack gap="4" max className={cls.footer} align="start">
              <HStack justify="between" max>
                {date}
                {views}
              </HStack>
              <HStack gap="4" justify="start">
                {userInfo}
              </HStack>
            </VStack>
          </VStack>
        </CardRedesigned>
      </AppLinkRedesigned>
    );
  }

  if (view === "list") {
    content = (
      <CardRedesigned className={cls.cardItem} padding="24" max>
        <VStack gap="16" max align="start">
          <HStack gap="8" max>
            {userInfo}
            {date}
          </HStack>
          {title}
          {subtitle}
          {imgList}
          {textBlock?.paragraphs && (
            <TextRedesigned
              text={textBlock.paragraphs.slice(0, 2).join(" ")}
              className={cls.textBlock}
            />
          )}
          <HStack max justify="between">
            <AppLinkRedesigned
              to={getRouteArticleDetails(article.id)}
              target={target}
            >
              <ButtonRedesigned variant="outline" className={cls.btn}>
                {t("read-more")}
              </ButtonRedesigned>
            </AppLinkRedesigned>
            {views}
          </HStack>
        </VStack>
      </CardRedesigned>
    );
  }

  return (
    <article
      data-testid="ArticleListItem"
      role="listitem"
      className={classNames(cls.articleListItem, {}, [className, cls[view]])}
    >
      {content}
    </article>
  );
});
