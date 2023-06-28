import { FC, HTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Button.module.scss';

type BtnTheme = 'clear';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: BtnTheme;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(cls.button, {}, [cls[theme], className])}
      {...otherProps}
    >
      {children}
    </button>
  );
}