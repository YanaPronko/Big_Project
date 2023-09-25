import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  ReducersList,
  useDynamicLoad,
} from 'shared/lib/hooks/useDynamicLoad/useDynamicLoad';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CalendarIcon } from 'shared/ui/CalendarIcon/CalendarIcon';
import { EyeIcon } from 'shared/ui/EyeIcon/EyeIcon';
import {
  getArtcileDetailsData,
  getArtcileDetailsError,
  getArtcileDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

const renderBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case 'CODE': {
      return <ArticleCodeBlockComponent key={block.id} block={block} className={cls.block} />;
    }
    case 'IMAGE': {
      return <ArticleImageBlockComponent key={block.id} block={block} className={cls.block} />;
    }
    case 'TEXT': {
      return <ArticleTextBlockComponent key={block.id} block={block} className={cls.block} />;
    }
    default: {
      return null;
    }
  }
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const dispatch = useAppDispatch();
  useDynamicLoad(reducers, true);
  const error = useSelector(getArtcileDetailsError);
  const isLoading = useSelector(getArtcileDetailsIsLoading);
  const article = useSelector(getArtcileDetailsData);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
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
    content = (
      <>
        <Avatar src={article?.img} size={200} className={cls.avatar} alt="avatar" />
        <Text title={article?.title} text={article?.subtitle} align="center" size="xl" />
        <div className={cls.articleInfo}>
          <EyeIcon className={cls.icon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={cls.articleInfo}>
          <CalendarIcon className={cls.icon} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <div className={classNames(cls.articleDetails, {}, [className])}>
      {content}
    </div>
  );
});
