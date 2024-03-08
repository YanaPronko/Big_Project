import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { AvatarDropdown } from "./AvatarDropdown";

const meta: Meta<typeof AvatarDropdown> = {
  title: "features/AvatarDropdown",
  component: AvatarDropdown,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

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
