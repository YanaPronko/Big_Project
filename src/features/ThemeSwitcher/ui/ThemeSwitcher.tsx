import { memo } from 'react';
import { useTheme } from '@/app/providers/Theme';
import { classNames } from '@/shared/lib/classNames/classNames';
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
