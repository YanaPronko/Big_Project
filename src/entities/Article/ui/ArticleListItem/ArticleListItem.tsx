import { memo } from "react";

import { ToggleFeatures } from "@/shared/lib/featureFlags";

import { ArticleListItemDeprecated } from "./ArticleListItemDeprecated/ArticleListItemDeprecated";
import { ArticleListItemRedesigned } from "./ArticleListItemRedesigned/ArticleListItemRedesigned";
import { ArticleListItemProps } from "../../model/types/articleListItem";

export const ArticleListItem = memo((props: ArticleListItemProps) => (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ArticleListItemRedesigned {...props} />}
      off={<ArticleListItemDeprecated {...props} />}
    />
  ));

