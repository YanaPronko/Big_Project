import { Decorator } from "@storybook/react";
import { Theme } from "app/providers/Theme/lib/ThemeContext";

const ThemeDecorator =
  (theme: Theme): Decorator =>
  (Story) =>
    (
      <div className={`app ${theme}`}>
        <Story />
      </div>
    );

export default ThemeDecorator;
