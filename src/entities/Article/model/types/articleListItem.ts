import { Article, ArticleView } from "./article";
import { HTMLAttributeAnchorTarget } from "react";

export interface ArticleListItemProps {
  className?: string;
  view: ArticleView;
  article: Article;
  target?: HTMLAttributeAnchorTarget;
}

export interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}