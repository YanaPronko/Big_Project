import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button } from '@/shared/ui/Button';
import { ThemeIcon } from '@/shared/ui/Icons';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className, ...otherProps } = props;
  const { toggleTheme } = useTheme();

  return (
    <Button
      className={classNames('', {}, [className])}
      theme="clear"
      onClick={toggleTheme}
      {...otherProps}
    >
      <ThemeIcon />
    </Button>
  );
});
