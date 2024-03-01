import { memo } from "react";

import { ToggleFeatures } from "@/shared/lib/featureFlags";
import { ArticleDetailsRedesigned } from "./ArticleDetailsRedesigned/ArticleDetails";
import { ArticleDetailsDeprecated } from "@/entities/Article/ui/ArticleDetails/ArticleDetailsDeprecated/ArticleDetails";
import { ArticleDetailsProps } from "../../model/types/articleDetails";

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ArticleDetailsRedesigned {...props} />}
      off={<ArticleDetailsDeprecated {...props} />}
    />
  );
});
