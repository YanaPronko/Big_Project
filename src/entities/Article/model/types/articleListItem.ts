import { HTMLAttributeAnchorTarget } from "react";

import { Article, ArticleView } from "./article";

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