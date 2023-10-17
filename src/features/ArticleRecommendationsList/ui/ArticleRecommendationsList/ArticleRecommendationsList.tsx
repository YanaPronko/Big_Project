import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticlesList } from 'entities/Article';
import { Text } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { useGetArticleRecommendations } from '../../api/articleRecommendationsApi';
import cls from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation('article');

  const { isLoading, error, data: recommendations } = useGetArticleRecommendations(4);

  if (error) {
    return <Text title={t('failed-loading-of-recommendations')} theme="error" size="l" />;
  }

  return (
    <VStack
      gap="16"
      align="stretch"
      className={classNames('', {}, [className])}
    >
      <Text title={t('recommendations')} />
      <ArticlesList
        articles={recommendations}
        isLoading={isLoading}
        target="_blank"
        className={cls.recommendations}
      />
    </VStack>
  );
});
