import { memo } from "react";

import { nanoid } from "@reduxjs/toolkit";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Text as TextDeprecated} from "@/shared/ui/deprecated/Text";

import { ArticleTextBlock } from "../../model/types/article";

import cls from "./ArticleTextBlockComponent.module.scss";
import { toggleFeatures } from "@/shared/lib/featureFlags";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  (props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    const Text = toggleFeatures({
      name: "isAppRedesigned",
      on: ()=> TextRedesigned,
      off: () => TextDeprecated,
    });
    return (
      <div
        className={classNames(cls.articleTextBlockComponent, {}, [className])}
      >
        {block.title && <Text title={block.title} className={cls.title} />}
        {block.paragraphs.map((paragraph) => (
          <Text text={paragraph} key={nanoid()} className={cls.paragraph} />
        ))}
      </div>
    );
  },
);
