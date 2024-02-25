import { Meta, StoryObj } from "@storybook/react";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { ArticleSortSelectorRedesigned } from "./ArticleSortSelector";

const meta: Meta<typeof ArticleSortSelectorRedesigned> = {
  title: "features/ArticleSortSelector",
  component: ArticleSortSelectorRedesigned,
};

export default meta;
type Story = StoryObj<typeof ArticleSortSelectorRedesigned>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
