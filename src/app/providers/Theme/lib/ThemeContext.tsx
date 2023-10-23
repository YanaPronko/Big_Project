import { Theme } from '../model/const/types';

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme:Theme) => void;
}
