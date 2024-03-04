import { FC, ReactNode, useEffect, useMemo, useState } from "react";

import { useJsonSettings } from "@/entities/User";
import { Theme } from "@/shared/const/theme";
import { ThemeContext } from "@/shared/lib/context/ThemeContext";
import { LOCAL_STORAGE_KEY } from "@/shared/const/localStorage";

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_KEY) as Theme;

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const { theme: defaultTheme } = useJsonSettings();

  const [theme, setTheme] = useState<Theme>(
    initialTheme || fallbackTheme || Theme.LIGHT,
  );
  const [isThemeInited, setThemeInited] = useState(false);

  useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      setTheme(defaultTheme);
      setThemeInited(true);
    }
  }, [defaultTheme, isThemeInited]);

    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, theme);
    }, [theme]);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
