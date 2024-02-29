import { memo } from "react";

import { articleDetailsReducer } from "@/entities/Article";
import { ToggleFeatures } from "@/shared/lib/featureFlags";
import {
  ReducersList,
  useDynamicLoad,
} from "@/shared/lib/hooks/useDynamicLoad/useDynamicLoad";

import ArticleDetailsPageDeprecated from "./ArticleDetailsPageDeprecated/ArticleDetailsPageDeprecated";
import ArticleDetailsPageRedesigned from "./ArticleDetailsPageRedesigned/ArticleDetailsPageRedesigned";
import { articleDetailsCommentsReducer } from "../../model/slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice";

const reducers: ReducersList = {
  comments: articleDetailsCommentsReducer,
  articleDetails: articleDetailsReducer,
};

const ArticleDetailsPage = () => {
  useDynamicLoad(reducers, true);

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ArticleDetailsPageRedesigned />}
      off={<ArticleDetailsPageDeprecated />}
    />
  );
};

export default memo(ArticleDetailsPage);
