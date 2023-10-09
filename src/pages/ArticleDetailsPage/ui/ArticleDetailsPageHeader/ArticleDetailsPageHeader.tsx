import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { RoutePaths } from 'app/config/routeConfig';
import { getArtcileDetailsData } from 'entities/Article';
import { getEditStatus } from '../../model/selectors/articleDetailsPage/articleDetailsPage';
import cls from './ArticleDetailsPageHeader.module.scss';

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
    <div
      className={classNames(cls.articleDetailsPageHeader, {}, [className])}
      {...otherProps}
    >
      <Button className={cls.btn} onClick={onBackToArticlesList}>
        {t('back-to-artciles-list')}
      </Button>
      {canEdit && (
        <Button className={cls.btn} onClick={onEditArticle}>
          {t('edit-article')}
        </Button>
      )}
    </div>
  );
});
