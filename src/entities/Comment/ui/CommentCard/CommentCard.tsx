import { FC } from 'react';
import { RoutePaths } from '@/app/config/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Text } from '@/shared/ui/Text/Text';
import { VStack } from '@/shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = (props) => {
  const {
    className, comment, isLoading, ...otherProps
  } = props;

  if (isLoading) {
    return (
      <VStack
        max
        gap="4"
        align="start"
        role="listitem"
        className={classNames(cls.commentCard, {}, [className])}
      >
        <Skeleton borderRadius="50%" width={30} height={30} />
        <Skeleton width={100} height={16} />
        <Skeleton width="100%" height={50} />
      </VStack>
    );
  }

  return (
    <VStack
      gap="4"
      max
      align="start"
      role="listitem"
      className={classNames(cls.commentCard, {}, [className])}
      {...otherProps}
    >
      <AppLink
        to={`${RoutePaths.profile}${comment.user.id}`}
        className={cls.header}
      >
        {comment.user.avatar && (
          <Avatar src={comment.user.avatar} size={30} alt="user's avatar" />
        )}
        <Text title={comment.user.username} />
      </AppLink>
      <Text text={comment.text} />
    </VStack>
  );
};
