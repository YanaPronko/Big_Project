import { HTMLAttributes, memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type BtnTheme = 'clear' |'clear_inverted' | 'outline' | 'background' | 'background_inverted' | 'outline_red';

export enum BtnSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

export type BtnType = 'button' | 'submit' | 'reset';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: BtnTheme;
  square?: boolean;
  size?: BtnSize;
  type?: BtnType;
  disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = 'outline',
    square,
    size = BtnSize.M,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
  };

  return (
    <button
      type="button"
      className={classNames(cls.button, mods, [
        cls[theme],
        cls[size],
        className,
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
