import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { ToggleFeatures } from "@/shared/lib/featureFlags";
import { Text } from "@/shared/ui/deprecated/Text";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";

import { ArticleIMGBlock } from "../../model/types/article";

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
            on={
              <TextRedesigned
                className={classNames("", {}, [className])}
                text={block.title}
                align="center"
              />
            }
            off={<Text text={block.title} align="center" />}
          />
        )}
      </>
    );
  },
);
