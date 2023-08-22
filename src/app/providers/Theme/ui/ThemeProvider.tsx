import {
  FC, ReactNode, useMemo, useState,
} from 'react';
import { LOCAL_STORAGE_KEY, ThemeContext, Theme } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
