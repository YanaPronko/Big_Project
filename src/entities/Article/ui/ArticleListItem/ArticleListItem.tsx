import { memo } from "react";
import { ArticleListItemProps } from "../../model/types/articleListItem";
import { ToggleFeatures } from "@/shared/lib/featureFlags";
import { ArticleListItemRedesigned } from "./ArticleListItemRedesigned/ArticleListItemRedesigned";
import { ArticleListItemDeprecated } from "./ArticleListItemDeprecated/ArticleListItemDeprecated";

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ArticleListItemRedesigned {...props} />}
      off={<ArticleListItemDeprecated {...props} />}
    />
  );
});

