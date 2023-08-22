import { FC, HTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type BtnTheme = 'clear' |'clear_inverted' | 'outline' | 'background' | 'background_inverted';

export enum BtnSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: BtnTheme;
  square?: boolean;
  size?: BtnSize;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    size = BtnSize.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
  };

  return (
    <button
      type="button"
      className={classNames(cls.button, mods, [cls[theme], cls[size], className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
