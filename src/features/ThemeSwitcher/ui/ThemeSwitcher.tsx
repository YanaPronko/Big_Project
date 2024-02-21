import { memo, useCallback } from "react";

import { saveJsonSettings } from "@/entities/User";
import { Theme } from "@/shared/const/theme";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Button } from "@/shared/ui/deprecated/Button";
import { ThemeIcon } from "@/shared/ui/deprecated/Icons";
import { ToggleFeatures } from "@/shared/lib/featureFlags";
import { ThemeIconRedesigned } from "@/shared/ui/redesigned/Icons";
import { ButtonRedesigned } from "@/shared/ui/redesigned/Button";

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
          className={classNames("", {}, [className])}
          variant="clear"
          onClick={toggleHandler}
          {...otherProps}
        >
          <ThemeIconRedesigned />
        </ButtonRedesigned>
      }
      off={
        <Button
          className={classNames("", {}, [className])}
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
