import { createContext } from 'react';

export enum Theme {
  LIGHT = 'app_light',
  DARK = 'app_dark',
  ORANGE = 'app_orange',
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme:Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
