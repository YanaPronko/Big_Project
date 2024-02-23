import { Meta, StoryObj } from "@storybook/react";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { TextRedesigned } from "./Text";

const meta: Meta<typeof TextRedesigned> = {
  title: "shared/Text",
  component: TextRedesigned,
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

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

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

ErrorText.decorators = [ThemeDecorator(Theme.DARK)];

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
