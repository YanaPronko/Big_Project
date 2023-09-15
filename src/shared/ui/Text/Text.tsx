import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export type TextTheme = 'primary' | 'error';
export type TextAlign = 'left' | 'right' | 'center';
export type TextSize = 'xl' | 'l' | 's' | 'xs';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

export const Text = memo((props: TextProps) => {
  const {
    className, title, text, theme = 'primary', align = 'left', size = 'l',
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(cls.textWrapper, {}, [className, cls[theme], cls[align], cls[size]])}
      {...otherProps}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
