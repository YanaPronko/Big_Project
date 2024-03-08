import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import { ReactRenderer } from "@storybook/react";

import { FeatureFlagsDecorator } from "../../src/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { StoreDecorator } from "../../src/shared/config/storybook/StoreDecorator/StoreDecorator";
import StyleDecorator from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
// import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { TranslationDecorator } from "../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator";
import { Theme } from "../../src/shared/const/theme";

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", title: "English" },
        { value: "ru", title: "Russian" },
      ],
      showName: true,
    },
  },
  theme: {
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      // The label to show for this toolbar item
      title: "Theme",
      icon: "circlehollow",
      // Array of plain string values or MenuItem shape (see below)
      items: ["light", "dark", "orange"],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

const preview: Preview = {
  decorators: [
    TranslationDecorator,
    StyleDecorator,
    // ThemeDecorator(Theme.LIGHT),
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: `app ${Theme.LIGHT}`,
        dark: `app ${Theme.DARK}`,
        orange: `app ${Theme.ORANGE}`,
      },
      defaultTheme: "light",
    }),
    RouterDecorator,
    StoreDecorator({
      user: {},
    }),
    FeatureFlagsDecorator({}),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
  },
};

export default preview;
