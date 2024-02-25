import { memo, useCallback } from "react";

import { saveJsonSettings } from "@/entities/User";
import { Theme } from "@/shared/const/theme";
import { ToggleFeatures } from "@/shared/lib/featureFlags";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Button } from "@/shared/ui/deprecated/Button";
import { ThemeIcon } from "@/shared/ui/deprecated/Icons";
import { ButtonRedesigned } from "@/shared/ui/redesigned/Button";
import { ThemeIconRedesigned } from "@/shared/ui/redesigned/Icons";

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className, ...otherProps } = props;
  const { toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const toggleHandler = useCallback(() => {
    toggleTheme((newTheme: Theme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [toggleTheme, dispatch]);

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <ButtonRedesigned
          className={cls.btn}
          variant="clear"
          onClick={toggleHandler}
          {...otherProps}
        >
          <ThemeIconRedesigned />
        </ButtonRedesigned>
      }
      off={
        <Button
          theme="clear"
          onClick={toggleHandler}
          {...otherProps}
        >
          <ThemeIcon inverted />
        </Button>
      }
    />
  );
});
