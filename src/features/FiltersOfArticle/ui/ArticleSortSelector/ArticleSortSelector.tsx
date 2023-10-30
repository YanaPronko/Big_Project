import { memo, useMemo } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/order';
import { Select, SelectOption } from '@/shared/ui/Select/Select';
import { ArticlesSortField } from '../../model/types/articlesFiltersSchema';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  order: SortOrder;
  sort: ArticlesSortField;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticlesSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    className, order, sort, onChangeOrder, onChangeSort,
  } = props;
  const { t } = useTranslation('article');

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    { value: 'asc', content: `${t('ascending')}` },
    { value: 'desc', content: `${t('descending')}` },
  ], [t]);

  const sortOptions = useMemo<SelectOption<ArticlesSortField>[]>(() => [
    { value: 'title', content: `${t('title')}` },
    { value: 'createdAt', content: `${t('creation date')}` },
    { value: 'views', content: `${t('number-of-views')}` },
  ], [t]);

  return (
    <div className={classNames(cls.articleSortSelector, {}, [className])}>
      <Select<SortOrder>
        key={nanoid()}
        options={orderOptions}
        label="Sort by"
        value={order}
        onChange={onChangeOrder}
      />
      <Select<ArticlesSortField>
        key={nanoid()}
        options={sortOptions}
        label="Sort by"
        value={sort}
        onChange={onChangeSort}
      />
    </div>
  );
});
