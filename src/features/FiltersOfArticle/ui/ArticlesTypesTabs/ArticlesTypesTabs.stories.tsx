import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { ArticlesTypesTabs } from "./ArticlesTypesTabs";

const meta: Meta<typeof ArticlesTypesTabs> = {
  title: "features/ArticlesTypesTabs",
  component: ArticlesTypesTabs,
};

export default meta;
type Story = StoryObj<typeof ArticlesTypesTabs>;

export const Primary: Story = {
  args: {},
};

Primary.decorators = [StoreDecorator({})];

export const PrimaryRedesigned: Story = {
  args: {},
};

PrimaryRedesigned.decorators = [StoreDecorator({}), RedesignedThemeDecorator()];

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const PrimaryDarkRedesigned: Story = {
  args: {},
};

PrimaryDarkRedesigned.decorators = [
  StoreDecorator({}),
  RedesignedThemeDecorator(Theme.DARK),
];