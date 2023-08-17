import type { Preview } from '@storybook/react';
import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from '../../src/app/providers/Theme/lib/ThemeContext';

const preview: Preview = {
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
