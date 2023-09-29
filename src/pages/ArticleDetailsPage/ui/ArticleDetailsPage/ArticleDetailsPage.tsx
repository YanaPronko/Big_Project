import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import { ReducersList, useDynamicLoad } from 'shared/lib/hooks/useDynamicLoad/useDynamicLoad';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/addCommentForm';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { getArtcileDetailsError, getArtcileDetailsIsLoading } from 'entities/Article/model/selectors/articleDetails';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const { id } = useParams<string>();
  const dispatch = useAppDispatch();

  useDynamicLoad(reducers, true);

  useInitialEffect(() => {
    dispatch(fetchArticleById(id));
    dispatch(fetchCommentsByArticleId(id));
  });

  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const isLoadingArticle = useSelector(getArtcileDetailsIsLoading);
  const error = useSelector(getArtcileDetailsError);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  if (!id) {
    return <Text title={t('article-not-found')} />;
  }

  if (isLoadingArticle) {
    return <ArticleDetails isLoading={isLoadingArticle} error={error} />;
  }

  if (error) {
    return <ArticleDetails isLoading={isLoadingArticle} error={error} />;
  }

  // ЧТО ЗА ОШИБКИ ОТ ESLINT?????
  // { isLoading && (<Loader />) };

  return (
    <div className={classNames(cls.articleDetailsPage, {}, [className])}>
      <ArticleDetails isLoading={isLoadingArticle} />
      <AddCommentForm onSendComment={onSendComment} />
      <Text title={t('comments')} className={cls.commentTitle} />
      <CommentList isLoading={isLoading} comments={comments} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
