import { createContext } from 'react';
import { ThemeContextProps } from '../../lib/ThemeContext';

export enum Theme {
  LIGHT = 'app_light',
  DARK = 'app_dark',
  ORANGE = 'app_orange',
}

export const ThemeContext = createContext<ThemeContextProps>({});
