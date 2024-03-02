import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui/deprecated/Text";

import { ArticleIMGBlock } from "../../model/types/article";

import cls from './ArticleImageBlockComponent.module.scss';
import { ToggleFeatures } from "@/shared/lib/featureFlags";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleIMGBlock;
}

export const ArticleImageBlockComponent = memo(
  (props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;

    return (
      <>
        {/* <img
          src={block.src}
          className={cls.image}
          alt={block.title}
        /> */}
        {block.title && (
          <ToggleFeatures
            feature="isAppRedesigned"
            on={<TextRedesigned text={block.title} align="center" />}
            off={<Text text={block.title} align="center" />}
          />
        )}
      </>
    );
  },
);
