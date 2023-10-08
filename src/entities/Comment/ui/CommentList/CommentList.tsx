import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';
import cls from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  isLoading?: boolean;
  comments?: Comment[];
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, isLoading, comments } = props;
  const { t } = useTranslation('article');

  return (
    <div className={classNames(cls.commentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard className={cls.comment} key={comment.id} comment={comment} isLoading={isLoading} />
        ))
      ) : (
        <Text text={t('no-comments')} />
      )}
    </div>
  );
});
