import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { AppImage } from "./AppImage";

// TODO make story

const meta: Meta<typeof AppImage> = {
  title: "shared/AppImage",
  component: AppImage,
  decorators: [RedesignedThemeDecorator()],
};

export default meta;
type Story = StoryObj<typeof AppImage>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [RedesignedThemeDecorator(Theme.DARK)];
