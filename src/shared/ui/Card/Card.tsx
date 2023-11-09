import { HTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

type theme = 'normal' | 'outlined';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: theme;
  max?: boolean;
}

export const Card = memo((props: CardProps) => {
  const {
    className, children, max, theme = 'normal', ...otherProps
  } = props;

  return (
    <div
      className={classNames(cls.card, { [cls.max]: max }, [className, cls[theme]])}
      {...otherProps}
    >
      { children }
    </div>
  );
});
