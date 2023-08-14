import { useTheme } from 'app/providers/Theme';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { ThemeIcon } from 'shared/ui/ThemeIcon/ThemeIcon';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
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
};
