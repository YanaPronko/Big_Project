import { Meta, StoryObj } from "@storybook/react";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { AppImage } from "./AppImage";

// TODO make story

const meta: Meta<typeof AppImage> = {
  title: "shared/AppImage",
  component: AppImage,
};

export default meta;
type Story = StoryObj<typeof AppImage>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
