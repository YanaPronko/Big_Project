import { Meta, StoryObj } from "@storybook/react";

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

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
