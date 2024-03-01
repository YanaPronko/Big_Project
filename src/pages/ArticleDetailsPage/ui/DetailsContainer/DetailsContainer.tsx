import { memo } from "react";

import { useParams } from "react-router-dom";

import { ArticleDetails, fetchArticleById } from "@/entities/Article";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { CardRedesigned } from "@/shared/ui/redesigned/Card";

interface DetailsContainterProps {
  className?: string;
}

export const DetailsContainer = memo((props: DetailsContainterProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { id } = useParams<string>();

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchArticleById(id));
    }
  });

  return (
    <CardRedesigned borderRadius="round" className={className} padding="24">
      <ArticleDetails />
    </CardRedesigned>
  );
});
