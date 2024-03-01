import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Code as CodeDeprecated } from "@/shared/ui/deprecated/Code";

import { ArticleBlockCode } from "../../model/types/article";

import cls from "./ArticleCodeBlockComponent.module.scss";
import { toggleFeatures } from "@/shared/lib/featureFlags";
import { CodeRedesigned } from "@/shared/ui/redesigned/Code";

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleBlockCode;
}

export const ArticleCodeBlockComponent = memo(
  (props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props;

    const Code = toggleFeatures({
      name: "isAppRedesigned",
      on: () => CodeRedesigned,
      off: ()=> CodeDeprecated
    })

    return (
      <div
        className={classNames(cls.articleCodeBlockComponent, {}, [className])}
      >
        <Code text={block.code} />
      </div>
    );
  },
);
