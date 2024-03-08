import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { Drawer } from "./Drawer";

const meta: Meta<typeof Drawer> = {
  title: "shared/Drawer",
  component: Drawer,
  decorators: [RedesignedThemeDecorator()],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Primary: Story = {
  args: {
    children: "TEXT",
    isOpen: true,
    onClose: action("Close"),
  },
};

export const PrimaryRedesigned: Story = {
  args: {
    children: "TEXT",
    isOpen: true,
    onClose: action("Close"),
  },
};

PrimaryRedesigned.decorators = [RedesignedThemeDecorator()];

export const PrimaryDark: Story = {
  args: {
    children: "TEXT",
    isOpen: true,
    onClose: action("Close"),
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDarkRedesigned: Story = {
  args: {
    children: "TEXT",
    isOpen: true,
    onClose: action("Close"),
  },
};

PrimaryDarkRedesigned.decorators = [
  RedesignedThemeDecorator(Theme.DARK),
];
