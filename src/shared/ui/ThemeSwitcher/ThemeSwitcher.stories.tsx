import { ThemeSwitcher } from "./ThemeSwitcher";
import { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/Theme/lib/ThemeContext";

const meta: Meta<typeof ThemeSwitcher> = {
  title: "shared/ThemeSwitcher",
  component: ThemeSwitcher,
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Normal: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
