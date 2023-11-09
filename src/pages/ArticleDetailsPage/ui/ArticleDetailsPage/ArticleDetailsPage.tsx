import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArticleDetails, articleDetailsReducer, fetchArticleById } from '@/entities/Article';
import { Text } from '@/shared/ui/Text/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ReducersList, useDynamicLoad } from '@/shared/lib/hooks/useDynamicLoad/useDynamicLoad';
import { getArtcileDetailsError, getArtcileDetailsIsLoading } from '@/entities/Article/model/selectors/articleDetails';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { articleDetailsCommentsReducer } from '../../model/slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice';
import { ArticleRating } from '@/features/ArticleRating';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  comments: articleDetailsCommentsReducer,
  articleDetails: articleDetailsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const { id } = useParams<string>();
  const dispatch = useAppDispatch();

  useDynamicLoad(reducers, true);
  useInitialEffect(() => {
    if (id) {
      dispatch(fetchArticleById(id));
    }
  });

  // Page
  const isLoadingArticle = useSelector(getArtcileDetailsIsLoading);
  const error = useSelector(getArtcileDetailsError);

  if (!id) {
    return <Text title={t('article-not-found')} />;
  }

  if (isLoadingArticle) {
    return <ArticleDetails isLoading={isLoadingArticle} />;
  }

  if (error) {
    return <ArticleDetails error={error} />;
  }

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack gap="32" align="stretch">
        <ArticleDetailsPageHeader />
        <ArticleDetails />
        <ArticleRating articleId={id} />
        <ArticleRecommendationsList />
        <ArticleDetailsComments id={id} />
      </VStack>
    </Page>
  );
};

export default memo(ArticleDetailsPage);
