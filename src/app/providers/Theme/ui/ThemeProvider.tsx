import { FC, ReactNode, useEffect, useMemo, useState } from "react";

import { useJsonSettings } from "@/entities/User";
import { Theme } from "@/shared/const/theme";
import { ThemeContext } from "@/shared/lib/context/ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const { theme: defaultTheme = Theme.DARK } = useJsonSettings();

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
  const [isThemeInited, setThemeInited] = useState(false);

  useEffect(() => {
    if (!isThemeInited) {
      setTheme(defaultTheme);
      setThemeInited(true);
    }
  }, [defaultTheme, isThemeInited]);

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
