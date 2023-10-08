import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { ArticleTextBlockComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { RoutePaths } from 'app/config/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Article, ArticleTextBlock, ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  view: ArticleView;
  article: Article;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    className, view, article, target,
  } = props;
  const { t } = useTranslation('article');

  let content;
  const types = <Text text={article.type.join(',')} className={cls.types} />;
  const views = <Text text={String(article.views)} className={cls.views} />;
  const title = <Text title={article.title} className={cls.title} />;
  const date = <Text text={article.createdAt} className={cls.date} />;
  const img = <img src={article.img} alt={article.title} className={cls.img} />;

  const textBlock = article.blocks.find((block) => block.type === 'TEXT') as ArticleTextBlock;

  if (view === 'grid') {
    content = (
      <AppLink to={`${RoutePaths.article_details}${article.id}`} target={target}>
        <Card className={cls.cardItem}>
          <div className={cls.imageWrapper}>
            {img}
            {date}
          </div>
          <div className={cls.infoWrapper}>
            {types}
            {views}
          </div>
          {title}
        </Card>
      </AppLink>
    );
  }

  if (view === 'list') {
    content = (
      <Card className={cls.cardItem}>
        <div className={cls.header}>
          <Avatar
            size={30}
            alt={article.user.username}
            src={article.user.avatar}
          />
          <Text text={article.user.username} className={cls.username} />
          {date}
        </div>
        {title}
        {types}
        {img}
        {textBlock && (
          <ArticleTextBlockComponent
            block={textBlock}
            className={cls.textBlock}
          />
        )}
        <div className={cls.footer}>
          <Button className={cls.btn}>
            <AppLink to={`${RoutePaths.article_details}${article.id}`} target={target}>{t('read-more')}</AppLink>
          </Button>
          {views}
        </div>
      </Card>
    );
  }

  return (
    <article className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
      {content}
    </article>
  );
});
