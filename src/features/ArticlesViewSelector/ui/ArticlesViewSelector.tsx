import { memo } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { classNames } from 'shared/lib/classNames/classNames';
import { GridIcon } from 'shared/ui/GridIcon/GridIcon';
import { ListIcon } from 'shared/ui/ListIcon/ListIcon';
import { ArticleView } from 'entities/Article';
import { Button } from 'shared/ui/Button/Button';
import cls from './ArticlesViewSelector.module.scss';

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
  { view: 'grid', Icon: <GridIcon /> },
  { view: 'list', Icon: <ListIcon /> },
];

export const ArticlesViewSelector = memo((props: ArticlesViewSelectorProps) => {
  const {
    className, view, onViewClick, ...otherProps
  } = props;

  const onClick = (newView: ArticleView) => () => onViewClick?.(newView);

  return (
    <div
      className={classNames(cls.articlesViewSelector, {}, [className])}
      {...otherProps}
    >
      {viewTypes.map((type) => (
        <Button theme="clear" key={nanoid()} onClick={onClick(type.view)} className={classNames(cls.btn, { [cls.selected]: view === type.view })}>
          {type.Icon}
        </Button>
      ))}
    </div>
  );
});