import { memo, useCallback } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getArtcileDetailsData } from "@/entities/Article";
import { getRouteArticleEdit } from "@/shared/const/AppRoutes";
import { CardRedesigned } from "@/shared/ui/redesigned/Card";
import { ArticleAdditionalInfo } from "@/widgets/ArticleAdditionalInfo";

import { getEditStatus } from "../../model/selectors/articleDetailsPage/articleDetailsPage";

import cls from "./AdditionalInfoContainer.module.scss";

export const AdditionalInfoContainer = memo(() => {
  const navigate = useNavigate();
  const canEdit = useSelector(getEditStatus);
  const article = useSelector(getArtcileDetailsData);

  const onEditArticle = useCallback(() => {
    navigate(getRouteArticleEdit(article ? article?.id : ""));
  }, [navigate, article]);

  if (!article) {
    return null;
  }

  return (
    <CardRedesigned padding="24" borderRadius="round" className={cls.card}>
      <ArticleAdditionalInfo
        onEdit={onEditArticle}
        author={article.user}
        createdAt={article.createdAt}
        views={article.views}
        canEdit={canEdit}
      />
    </CardRedesigned>
  );
});
