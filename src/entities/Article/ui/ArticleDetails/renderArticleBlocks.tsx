import { ArticleBlock } from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { nanoid } from "@reduxjs/toolkit";

import cls from "./ArticleDetailsRedesigned/ArticleDetails.module.scss";

export const renderBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case "CODE": {
      return (
        <ArticleCodeBlockComponent
          key={nanoid()}
          block={block}
          className={cls.block}
        />
      );
    }
    case "IMAGE": {
      return (
        <ArticleImageBlockComponent
          key={nanoid()}
          block={block}
          className={cls.block}
        />
      );
    }
    case "TEXT": {
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
