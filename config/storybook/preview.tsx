import type { Preview } from "@storybook/react";
// import "app/styles/index.scss";
import StyleDecorator from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import ThemeDecorator from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../../src/app/providers/Theme/lib/ThemeContext";

const preview: Preview = {
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT)],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
