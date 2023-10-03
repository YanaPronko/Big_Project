import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
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
import { Button } from 'shared/ui/Button/Button';
import { RoutePaths } from 'app/config/routeConfig';
import { Page } from 'shared/ui/Page/Page';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
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
  const navigate = useNavigate();

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

  const onBackToArticlesList = useCallback(() => {
    navigate(RoutePaths.articles);
  }, [navigate]);
  if (!id) {
    return <Text title={t('article-not-found')} />;
  }

  if (isLoadingArticle) {
    return <ArticleDetails isLoading={isLoadingArticle} />;
  }

  if (error) {
    return <ArticleDetails error={error} />;
  }

  // ЧТО ЗА ОШИБКИ ОТ ESLINT?????
  // { isLoading && (<Loader />) };

  return (
    <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
      <Button className={cls.btn} onClick={onBackToArticlesList}>Back to artciles list</Button>
      <ArticleDetails />
      <AddCommentForm onSendComment={onSendComment} />
      <Text title={t('comments')} className={cls.commentTitle} />
      <CommentList isLoading={isLoading} comments={comments} />
    </Page>
  );
};

export default memo(ArticleDetailsPage);
