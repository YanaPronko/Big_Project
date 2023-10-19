import { Theme } from 'app/providers/Theme/model/const/types';

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme:Theme) => void;
}
