import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
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
      <>
        <Skeleton borderRadius="50%" width={30} height={30} />
        <Skeleton width={100} height={16} />
        <Skeleton width="100%" height={50} />
      </>
    );
  }

  return (
    <div
      className={classNames(cls.commentCard, {}, [className])}
      {...otherProps}
    >
      <div className={cls.header}>
        {comment.user.avatar && (
          <Avatar src={comment.user.avatar} size={30} alt="user's avatar" />
        )}
        <Text title={comment.user.username} />
      </div>
      <Text text={comment.text} />
    </div>
  );
};
