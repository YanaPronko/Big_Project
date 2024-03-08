import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { ArticleSortSelectorRedesigned } from "./ArticleSortSelector";

const meta: Meta<typeof ArticleSortSelectorRedesigned> = {
  title: "features/ArticleSortSelectorRedesigned",
  component: ArticleSortSelectorRedesigned,
};

export default meta;
type Story = StoryObj<typeof ArticleSortSelectorRedesigned>;

export const Primary: Story = {
  args: {},
};

Primary.decorators = [RedesignedThemeDecorator()];

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [RedesignedThemeDecorator(Theme.DARK)];
