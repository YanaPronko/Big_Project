import { memo } from "react";

import { nanoid } from "@reduxjs/toolkit";

import { ArticleView } from "@/entities/Article";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import { GridIcon, ListIcon } from "@/shared/ui/Icons";

import cls from "./ArticlesViewSelector.module.scss";

interface ArticlesViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

interface viewTypesInterface {
  view: ArticleView;
  Icon: JSX.Element;
}

const viewTypes: viewTypesInterface[] = [
  { view: "grid", Icon: <GridIcon /> },
  { view: "list", Icon: <ListIcon /> },
];

export const ArticlesViewSelector = memo((props: ArticlesViewSelectorProps) => {
  const { className, view, onViewClick, ...otherProps } = props;

  const onClick = (newView: ArticleView) => () => onViewClick?.(newView);

  return (
    <div
      className={classNames(cls.articlesViewSelector, {}, [className])}
      {...otherProps}
    >
      {viewTypes.map((type) => (
        <Button
          theme="clear"
          key={nanoid()}
          onClick={onClick(type.view)}
          className={classNames(cls.btn, {
            [cls.selected]: view === type.view,
          })}
        >
          {type.Icon}
        </Button>
      ))}
    </div>
  );
});
