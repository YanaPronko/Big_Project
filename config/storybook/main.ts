import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  previewHead: (head) => `
    ${head}
    <style>
      html {
        font-size: 10px;
      }
    </style>
  `,
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-mock',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
