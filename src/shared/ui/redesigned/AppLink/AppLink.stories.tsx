import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { AppLinkRedesigned } from "./AppLink";

const meta: Meta<typeof AppLinkRedesigned> = {
  title: "shared/AppLinkRedesigned",
  component: AppLinkRedesigned,
  args: {
    to: "/",
  },
  decorators: [RedesignedThemeDecorator()],
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
PrimaryDark.decorators = [RedesignedThemeDecorator(Theme.DARK)];

export const RedDark: Story = {
  args: {
    children: "Text",
    variant: "red",
  },
};
RedDark.decorators = [RedesignedThemeDecorator(Theme.DARK)];
