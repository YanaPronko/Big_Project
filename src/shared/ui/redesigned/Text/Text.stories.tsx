import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { TextRedesigned } from "./Text";

const meta: Meta<typeof TextRedesigned> = {
  title: "shared/TextRedesigned",
  component: TextRedesigned,
  decorators: [RedesignedThemeDecorator()],
};

export default meta;
type Story = StoryObj<typeof TextRedesigned>;

export const Primary: Story = {
  args: {
    title: "Title",
    text: "Text text text text",
  },
};

export const PrimaryDark: Story = {
  args: {
    title: "Title",
    text: "Text text text text",
  },
};

PrimaryDark.decorators = [RedesignedThemeDecorator(Theme.DARK)];

export const ErrorText: Story = {
  args: {
    title: "Title",
    text: "Text text text text",
    variant: "error",
  },
};

export const ErrorTextDark: Story = {
  args: {
    title: "Title",
    text: "Text text text text",
    variant: "error",
  },
};

ErrorText.decorators = [RedesignedThemeDecorator(Theme.DARK)];

export const TextXL: Story = {
  args: {
    title: "Title",
    text: "Text text text text",
    size: "xl",
  },
};

export const TextL: Story = {
  args: {
    title: "Title",
    text: "Text text text text",
    size: "l",
  },
};

export const TextM: Story = {
  args: {
    title: "Title",
    text: "Text text text text",
    size: "m",
  },
};

export const TextS: Story = {
  args: {
    title: "Title",
    text: "Text text text text",
    size: "s",
  },
};
