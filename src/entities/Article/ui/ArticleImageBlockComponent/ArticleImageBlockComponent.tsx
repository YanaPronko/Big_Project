import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';

import cls from './ArticleImageBlockComponent.module.scss';

import { ArticleIMGBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleIMGBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const { className, block } = props;

  return (
    <>
      <img
        src={block.src}
        className={classNames(cls.img, {}, [className])}
        alt={block.title}
      />
      {block.title && <Text text={block.title} align="center" /> }
    </>
  );
});
