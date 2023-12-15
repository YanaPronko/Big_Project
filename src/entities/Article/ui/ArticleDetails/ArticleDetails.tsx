import { memo } from 'react';

import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { CalendarIcon, EyeIcon } from '@/shared/ui/Icons';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './ArticleDetails.module.scss';

import { getArtcileDetailsData } from '../../model/selectors/articleDetails';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
  className?: string;
  isLoading?: boolean;
  error?: string;
}

const renderBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case 'CODE': {
      return <ArticleCodeBlockComponent key={nanoid()} block={block} className={cls.block} />;
    }
    case 'IMAGE': {
      return (
        <ArticleImageBlockComponent
          key={nanoid()}
          block={block}
          className={cls.block}
        />
      );
    }
    case 'TEXT': {
      return (
        <ArticleTextBlockComponent
          key={nanoid()}
          block={block}
          className={cls.block}
        />
      );
    }
    default: {
      return null;
    }
  }
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const {
    className, isLoading, error,
  } = props;

  const article = useSelector(getArtcileDetailsData);

  let content;

  if (isLoading) {
    content = (
      <VStack gap="32" max className={classNames(cls.articleDetails, {}, [className])}>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          borderRadius="50%"
          key={nanoid()}
        />
        <Skeleton width={300} height={32} key={nanoid()} />
        <Skeleton width={600} height={24} key={nanoid()} />
        <Skeleton width="100%" height={200} key={nanoid()} />
        <Skeleton width="100%" height={200} key={nanoid()} />
      </VStack>
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
      <VStack gap="8" max className={classNames('', {}, [className])} role="section">
        <Avatar src={article?.img} size={200} className={cls.avatar} alt="avatar" />
        <Text title={article?.title} text={article?.subtitle} align="center" size="xl" />
        <HStack justify="center">
          <EyeIcon className={cls.icon} />
          <Text text={String(article?.views)} />
        </HStack>
        <HStack justify="center">
          <CalendarIcon className={cls.icon} />
          <Text text={article?.createdAt} />
        </HStack>
        {article?.blocks.map(renderBlock)}
      </VStack>
    );
  }

  return content;
});
