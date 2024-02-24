import { Meta, StoryObj } from "@storybook/react";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { AppLinkRedesigned } from "./AppLink";

const meta: Meta<typeof AppLinkRedesigned> = {
  title: "shared/AppLink",
  component: AppLinkRedesigned,
  args: {
    to: "/",
  },
};

export default meta;
type Story = StoryObj<typeof AppLinkRedesigned>;

export const Primary: Story = {
  args: {
    children: "Text",
    variant: "primary",
  },
};

export const Red: Story = {
  args: {
    children: "Text",
    variant: "red",
  },
};

export const PrimaryDark: Story = {
  args: {
    children: "Text",
    variant: "primary",
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark: Story = {
  args: {
    children: "Text",
    variant: "red",
  },
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];
