import { HTMLAttributeAnchorTarget, memo } from "react";

import { useTranslation } from "react-i18next";

import { getRouteArticleDetails } from "@/shared/const/AppRoutes";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppImage } from "@/shared/ui/AppImage";
import { AppLink } from "@/shared/ui/AppLink";
import { Avatar } from "@/shared/ui/Avatar";
import { Button } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";
import { Skeleton } from "@/shared/ui/Skeleton";
import { Text } from "@/shared/ui/Text";

import {
  Article,
  ArticleTextBlock,
  ArticleView,
} from "../../model/types/article";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

import cls from "./ArticleListItem.module.scss";

interface ArticleListItemProps {
  className?: string;
  view: ArticleView;
  article: Article;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, view, article, target } = props;
  const { t } = useTranslation("article");

  let content;
  const types = <Text text={article.type.join(",")} className={cls.types} />;
  const views = <Text text={String(article.views)} className={cls.views} />;
  const title = <Text title={article.title} className={cls.title} />;
  const date = <Text text={article.createdAt} className={cls.date} />;
  const imgGrid = (
    <AppImage
      src={article.img}
      alt={article.title}
      className={cls.img}
      fallback={<Skeleton height="200px" width="200px" />}
    />
  );
  const imgList = (
    <AppImage
      src={article.img}
      alt={article.title}
      className={cls.img}
      fallback={<Skeleton height="250px" width="100%" />}
    />
  );

  const textBlock = article.blocks.find(
    (block) => block.type === "TEXT",
  ) as ArticleTextBlock;

  if (view === "grid") {
    content = (
      <AppLink to={getRouteArticleDetails(article.id)} target={target}>
        <Card className={cls.cardItem}>
          <div className={cls.imageWrapper}>
            {imgGrid}
            {date}
          </div>
          <div className={cls.infoWrapper}>
            {types}
            {views}
          </div>
          {title}
        </Card>
      </AppLink>
    );
  }

  if (view === "list") {
    content = (
      <Card className={cls.cardItem}>
        <div className={cls.header}>
          <Avatar
            size={30}
            alt={article.user.username}
            src={article.user.avatar}
          />
          <Text text={article.user.username} className={cls.username} />
          {date}
        </div>
        {title}
        {types}
        {imgList}
        {textBlock && (
          <ArticleTextBlockComponent
            block={textBlock}
            className={cls.textBlock}
          />
        )}
        <div className={cls.footer}>
          <AppLink to={getRouteArticleDetails(article.id)} target={target}>
            <Button className={cls.btn}>{t("read-more")}</Button>
          </AppLink>
          {views}
        </div>
      </Card>
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
