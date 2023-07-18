import { useTheme } from 'app/providers/Theme';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { ReactComponent as ThemeIcon } from 'shared/assets/icons/theme.svg';
import { Button } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

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
      <ThemeIcon className={classNames(cls.icon, {}, [className])} />
    </Button>
  );
};
