import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArtcileDetailsData } from '@/entities/Article';
import { RoutePaths } from '@/shared/const/AppRoutes';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';

import { getEditStatus } from '../../model/selectors/articleDetailsPage/articleDetailsPage';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className, ...otherProps } = props;

  const navigate = useNavigate();
  const { t } = useTranslation('article');
  const canEdit = useSelector(getEditStatus);
  const article = useSelector(getArtcileDetailsData);

  const onBackToArticlesList = useCallback(() => {
    navigate(RoutePaths.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePaths.article_details}${article?.id}/edit`);
  }, [navigate, article?.id]);

  return (
    <HStack
      role="section"
      justify="between"
      max
      className={classNames('', {}, [className])}
      {...otherProps}
    >
      <Button onClick={onBackToArticlesList}>
        {t('back-to-artciles-list')}
      </Button>
      {canEdit && (
        <Button onClick={onEditArticle}>
          {t('edit-article')}
        </Button>
      )}
    </HStack>
  );
});
