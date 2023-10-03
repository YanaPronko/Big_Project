import { memo, useCallback } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticlesList.module.scss';

interface ArticlesListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === 'grid' ? 9 : 3)
  .fill(0)
  .map((_) => <ArticleListItemSkeleton key={nanoid()} view={view} className={cls.card} />);

export const ArticlesList = memo((props: ArticlesListProps) => {
  const {
    className, articles, isLoading, view = 'grid',
  } = props;

  const renderArticles = useCallback((article: Article) => (
    <ArticleListItem key={nanoid()} article={article} view={view} />), [view]);

  return (
    <div className={classNames(cls.articlesList, {}, [className, cls[view]])}>
      {articles.length > 0 && articles.map(renderArticles)}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
