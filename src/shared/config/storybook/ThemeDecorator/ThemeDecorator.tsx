import { Decorator } from '@storybook/react';
import { ThemeProvider } from 'app/providers/Theme';
import { Theme } from 'app/providers/Theme/lib/ThemeContext';

const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <Story />
    </div>
  </ThemeProvider>
);

export default ThemeDecorator;
