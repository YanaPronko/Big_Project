import type { Preview } from '@storybook/react';
import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator';
import { Theme } from '../../src/app/providers/Theme/lib/ThemeContext';

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'ru', title: 'Russian' },
      ],
      showName: true,
    },
  },
  //   theme: {
  //     name: 'Theme',
  //     description: 'Global theme for components',
  //     toolbar: {
  //       // https://5a375b97f4b14f0020b0cda3-wbeulgbetj.chromatic.com/?path=/story/basics-icon--labels
  //       icon: 'circlehollow',
  //       items: [
  //         { value: 'app_light', title: 'Light' },
  //         { value: 'app_dark', title: 'Dark' },
  //       ],
  //       showName: true,
  //       dynamicTitle: true,
  //     },
  //   },
  // };
};

const preview: Preview = {
  decorators: [
    TranslationDecorator,
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
  ],
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
