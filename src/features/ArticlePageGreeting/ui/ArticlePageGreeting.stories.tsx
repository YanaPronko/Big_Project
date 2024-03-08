import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { ArticlePageGreeting } from "./ArticlePageGreeting";

const meta: Meta<typeof ArticlePageGreeting> = {
  title: "shared/ArticlePageGreeting",
  component: ArticlePageGreeting,
};

export default meta;
type Story = StoryObj<typeof ArticlePageGreeting>;

export const Primary: Story = {
  args: {},
};

export const PrimaryRedesigned: Story = {
  args: {},
};

PrimaryRedesigned.decorators = [RedesignedThemeDecorator()];

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDarkRedesigned: Story = {
  args: {},
};

PrimaryDarkRedesigned.decorators = [
  RedesignedThemeDecorator(Theme.DARK),
];
