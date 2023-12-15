import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ARTICLE_TYPES } from '@/shared/types/articlesTypes';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { ArticleType } from '@/entities/Article';
import cls from './ArticlesTypesTabs.module.scss';

interface ArticlesTypesTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticlesTypesTabs = memo((props: ArticlesTypesTabsProps) => {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation();

  const tabs = useMemo<TabItem[]>(() => ARTICLE_TYPES.map((type) => ({ value: type, content: t(`${type}`) })), [t]);

  const onTabClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType);
  }, [onChangeType]);

  return (
    <div className={classNames(cls.articlesTypesTabs, {}, [className])}>
      <Tabs tabs={tabs} onTabClick={onTabClick} selectedValue={value} />
    </div>
  );
});
