import { memo } from "react";

import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { ToggleFeatures } from "@/shared/lib/featureFlags";
import { Text } from "@/shared/ui/deprecated/Text";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";

import { Comment } from "../../model/types/comment";
import { CommentCard } from "../CommentCard/CommentCard";

interface CommentListProps {
  className?: string;
  isLoading?: boolean;
  comments?: Comment[];
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, isLoading, comments } = props;
  const { t } = useTranslation("article");

  return (
    <VStack
      gap="16"
      role="list"
      align="stretch"
      className={classNames("", {}, [className])}
    >
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            isLoading={isLoading}
          />
        ))
      ) : (
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<TextRedesigned text={t("no-comments")} size="xl" />}
          off={<Text text={t("no-comments")} size="xl" />}
        />
      )}
    </VStack>
  );
});
