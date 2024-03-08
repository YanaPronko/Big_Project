import { Suspense, memo, useCallback } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { CommentList } from "@/entities/Comment";
import { AddCommentForm } from "@/features/CommentForm";
import { classNames } from "@/shared/lib/classNames/classNames";
import { toggleFeatures } from "@/shared/lib/featureFlags";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Loader } from "@/shared/ui/deprecated/Loader";
import { Text as TextDeprecated } from "@/shared/ui/deprecated/Text";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";

import { getArticleDetailsCommentsIsLoading } from "../../model/selectors/comments/comments";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { getArticleComments } from "../../model/slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice";

interface ArticleDetailsCommentsProps {
  className?: string;
  id: string;
}

export const ArticleDetailsComments = memo(
  (props: ArticleDetailsCommentsProps) => {
    const { className, id, ...otherProps } = props;
    const { t } = useTranslation("article");
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
      dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback(
      (text: string) => {
        dispatch(addCommentForArticle(text));
      },
      [dispatch],
    );

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

    const Text = toggleFeatures({
      name: "isAppRedesigned",
      on: () => TextRedesigned,
      off: () => TextDeprecated,
    });

    return (
      <VStack
        gap="16"
        align="stretch"
        className={classNames("", {}, [className])}
        {...otherProps}
      >
        <Text title={t("comments")} />
        <Suspense fallback={<Loader />}>
          <AddCommentForm onSendComment={onSendComment} />
        </Suspense>
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </VStack>
    );
  },
);
