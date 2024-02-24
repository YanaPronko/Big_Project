import { Meta, StoryObj } from "@storybook/react";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { CardRedesigned } from "./Card";
import { TextRedesigned } from "../Text/Text";

const meta: Meta<typeof CardRedesigned> = {
  title: "shared/Card",
  component: CardRedesigned,
};

export default meta;
type Story = StoryObj<typeof CardRedesigned>;

export const Primary: Story = {
  args: {
    children: <TextRedesigned title="Title" text="Some text" />,
    variant: "normal",
  },
};

export const PrimaryDark: Story = {
  args: {
    children: <TextRedesigned title="Title" text="Some text" />,
    variant: "normal",
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outlined: Story = {
  args: {
    children: <TextRedesigned title="Title" text="Some text" />,
    variant: "outlined",
  },
};

export const OutlinedDark: Story = {
  args: {
    children: <TextRedesigned title="Title" text="Some text" />,
    variant: "outlined",
  },
};

OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
