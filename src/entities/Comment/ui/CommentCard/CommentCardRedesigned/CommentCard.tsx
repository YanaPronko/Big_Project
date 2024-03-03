import { FC } from "react";

import { getRouteProfile } from "@/shared/const/AppRoutes";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLinkRedesigned } from "@/shared/ui/redesigned/AppLink";
import { AvatarRedesigned } from "@/shared/ui/redesigned/Avatar";
import { CardRedesigned } from "@/shared/ui/redesigned/Card";
import { SkeletonRedesigned } from "@/shared/ui/redesigned/Skeleton";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";

import { CommentCardProps } from "../../../model/types/comment";

import cls from "./CommentCard.module.scss";

export const CommentCardRedesigned: FC<CommentCardProps> = (props) => {
  const { className, comment, isLoading, ...otherProps } = props;

  if (isLoading) {
    return (
      <VStack
        data-testid="CommentCard.Loading"
        max
        gap="4"
        align="start"
        role="listitem"
        className={classNames(cls.commentCard, {}, [className])}
      >
        <SkeletonRedesigned borderRadius="50%" width={30} height={30} />
        <SkeletonRedesigned width={100} height={16} />
        <SkeletonRedesigned width="100%" height={50} />
      </VStack>
    );
  }

  return (
    <CardRedesigned padding="24" max>
      <VStack
        data-testid="CommentCard.Content"
        gap="4"
        max
        align="start"
        role="listitem"
        className={classNames('', {}, [className])}
        {...otherProps}
      >
        <AppLinkRedesigned
          to={getRouteProfile(comment.user.id)}
          className={cls.header}
        >
          <HStack gap="8" >
            {comment.user.avatar && (
              <AvatarRedesigned
                src={comment.user.avatar}
                size={30}
                alt="user's avatar"
              />
            )}
            <TextRedesigned title={comment.user.username} />
          </HStack>
        </AppLinkRedesigned>
        <TextRedesigned text={comment.text} />
      </VStack>
    </CardRedesigned>
  );
};
