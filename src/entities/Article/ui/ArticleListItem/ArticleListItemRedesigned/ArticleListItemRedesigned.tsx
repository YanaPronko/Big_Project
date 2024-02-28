import { HTMLAttributeAnchorTarget, memo } from "react";

import { useTranslation } from "react-i18next";

import { getRouteArticleDetails } from "@/shared/const/AppRoutes";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/deprecated/AppLink";
import { Avatar } from "@/shared/ui/deprecated/Avatar";
import { Button } from "@/shared/ui/deprecated/Button";
import { Card } from "@/shared/ui/deprecated/Card";
import { Skeleton } from "@/shared/ui/deprecated/Skeleton";
import { Text } from "@/shared/ui/deprecated/Text";
import { AppImage } from "@/shared/ui/redesigned/AppImage";

import {
  Article,
  ArticleTextBlock,
  ArticleView,
} from "../../../model/types/article";
import { ArticleTextBlockComponent } from "../../ArticleTextBlockComponent/ArticleTextBlockComponent";

import cls from "./ArticleListItem.module.scss";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { EyeIconRedesigned } from "@/shared/ui/redesigned/Icons";
import { SkeletonRedesigned } from "@/shared/ui/redesigned/Skeleton";
import { CardRedesigned } from "@/shared/ui/redesigned/Card";
import { AvatarRedesigned } from "@/shared/ui/redesigned/Avatar";
import { AppLinkRedesigned } from "@/shared/ui/redesigned/AppLink";
import { ButtonRedesigned } from "@/shared/ui/redesigned/Button";
import { ArticleListItemProps } from "../../../model/types/articleListItem";

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
      />
      <TextRedesigned
        bold
        text={article.user.username}
      />
    </>
  );
  const views = (
    <HStack gap="8">
      <EyeIconRedesigned />
      <TextRedesigned text={String(article.views)} className={cls.views} />
    </HStack>
  );

  const title = <TextRedesigned title={article.title} className={cls.title} bold/>;
  const subtitle = <TextRedesigned title={article.subtitle} size="s" />
  const date = <TextRedesigned text={article.createdAt} className={cls.date} />;
  const imgGrid = (
    <AppImage
      src={article.img}
      alt={article.title}
      className={cls.img}
      fallback={<SkeletonRedesigned height="200px" width="200px" />}
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
        <CardRedesigned className={cls.cardItem} borderRadius="round">
          {imgGrid}
          <VStack className={cls.infoWrapper} gap="4">
            {title}
            {textBlock?.paragraphs && (
              <TextRedesigned
                text={textBlock.paragraphs.slice(0, 2).join(" ")}
                className={cls.textBlock}
              />
            )}
            <VStack gap="4" max className={cls.footer} align="start">
              <HStack justify="between" max>
                {date}
                {views}
              </HStack>
              <HStack gap="4" justify="start">{userInfo}</HStack>
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
