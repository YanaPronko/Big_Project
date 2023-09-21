import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getLoginIsLoading } from 'features/AuthByUserName/model/selectors/getLoginIsLoading/getLoginIsLoading';
import {
  getArtcileDetailsData,
  getArtcileDetailsError,
} from 'entities/Article/model/selectors/articleDetails';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  ReducersList,
  useDynamicLoad,
} from 'shared/lib/hooks/useDynamicLoad/useDynamicLoad';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  useDynamicLoad(reducers, true);
  const error = useSelector(getArtcileDetailsError);
  // const isLoading = useSelector(getLoginIsLoading);
  // const data = useSelector(getArtcileDetailsData);
  const isLoading = true;

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          borderRadius="50%"
        />
        <Skeleton width={300} height={32} />
        <Skeleton width={600} height={24} />
        <Skeleton width="100%" height={200} />
        <Skeleton width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        title="Fetching of article is failed"
        theme="error"
        align="center"
      />
    );
  } else {
    content = <Text text="ARTICLE" />;
  }

  return (
    <div className={classNames(cls.articleDetails, {}, [className])}>
      {content}
    </div>
  );
});
