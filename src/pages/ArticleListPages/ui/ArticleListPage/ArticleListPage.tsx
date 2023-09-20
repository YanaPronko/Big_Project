import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListPage.module.scss';

interface ArticleListPageProps {
  className?: string;
}

const ArticleListPage: FC<ArticleListPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
    <div className={classNames(cls.articleListPage, {}, [className])}>
      <h1>{t('article-list-page')}</h1>
    </div>
  );
};

export default memo(ArticleListPage);
