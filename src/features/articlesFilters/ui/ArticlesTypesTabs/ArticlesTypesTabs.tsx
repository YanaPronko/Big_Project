import { memo } from 'react';
// import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesTypesTabs.module.scss';

interface ArticlesTypesTabsProps {
  className?: string;
}

export const ArticlesTypesTabs = memo((props: ArticlesTypesTabsProps) => {
  const { className } = props;
  // const { t } = useTranslation();

  return (
    <div className={classNames(cls.articlesTypesTabs, {}, [className])}>
      Tabs
    </div>
  );
});
