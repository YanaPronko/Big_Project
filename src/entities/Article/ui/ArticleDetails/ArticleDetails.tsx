import { memo } from "react";

import { ToggleFeatures } from "@/shared/lib/featureFlags";

import { ArticleDetailsDeprecated } from "./ArticleDetailsDeprecated/ArticleDetails";
import { ArticleDetailsRedesigned } from "./ArticleDetailsRedesigned/ArticleDetails";
import { ArticleDetailsProps } from "../../model/types/articleDetails";

export const ArticleDetails = memo((props: ArticleDetailsProps) => (
  <ToggleFeatures
    feature="isAppRedesigned"
    on={<ArticleDetailsRedesigned {...props} />}
    off={<ArticleDetailsDeprecated {...props} />}
  />
));
