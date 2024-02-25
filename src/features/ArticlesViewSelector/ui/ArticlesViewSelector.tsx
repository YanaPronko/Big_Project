import { memo } from "react";

import { nanoid } from "@reduxjs/toolkit";

import { ArticleView } from "@/entities/Article";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ToggleFeatures, toggleFeatures } from "@/shared/lib/featureFlags";
import { Button } from "@/shared/ui/deprecated/Button";
import { GridIcon, ListIcon } from "@/shared/ui/deprecated/Icons";
import { ButtonRedesigned } from "@/shared/ui/redesigned/Button";
import { CardRedesigned } from "@/shared/ui/redesigned/Card";
import {
  GridIconRedesigned,
  ListIconRedesigned,
} from "@/shared/ui/redesigned/Icons";

import cls from "./ArticlesViewSelector.module.scss";
import { HStack } from "@/shared/ui/redesigned/Stack";

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
  {
    view: "grid",
    Icon: toggleFeatures({
      name: "isAppRedesigned",
      on: () => <GridIconRedesigned />,
      off: () => <GridIcon />,
    }),
  },
  {
    view: "list",
    Icon: toggleFeatures({
      name: "isAppRedesigned",
      on: () => <ListIconRedesigned />,
      off: () => <ListIcon />,
    }),
  },
];

export const ArticlesViewSelector = memo((props: ArticlesViewSelectorProps) => {
  const { className, view, onViewClick, ...otherProps } = props;

  const onClick = (newView: ArticleView) => () => onViewClick?.(newView);

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <CardRedesigned
          className={classNames(cls.articlesViewSelectorRedesigned, {}, [
            className,
          ])}
          borderRadius="round"
          padding="16"
          {...otherProps}
        >
          <HStack>
            {viewTypes.map((type) => (
              <ButtonRedesigned
                variant="clear"
                key={nanoid()}
                onClick={onClick(type.view)}
                className={classNames(cls.btn, {
                  [cls.selected]: view === type.view,
                })}
              >
                {type.Icon}
              </ButtonRedesigned>
            ))}
          </HStack>
        </CardRedesigned>
      }
      off={
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
      }
    />
  );
});
