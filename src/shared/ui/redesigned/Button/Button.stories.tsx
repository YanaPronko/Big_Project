import { Meta, StoryObj } from "@storybook/react";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { ButtonRedesigned } from "./Button";

const meta: Meta<typeof ButtonRedesigned> = {
  title: "shared/Button",
  component: ButtonRedesigned,
};

export default meta;
type Story = StoryObj<typeof ButtonRedesigned>;

export const Primary: Story = {
  args: {
    children: "Text",
  },
};

export const Clear: Story = {
  args: {
    children: "Text",
    variant: "clear",
  },
};

export const Outline: Story = {
  args: {
    children: "Text",
    variant: "outline",
  },
};

export const OutlineDark: Story = {
  args: {
    children: "Text",
    variant: "outline",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineSizeM: Story = {
  args: {
    children: "Text",
    variant: "outline",
    size: 'm'
  },
};

export const OutlineSizeL: Story = {
  args: {
    children: "Text",
    variant: "outline",
    size: 'l',
  },
};

export const OutlineSizeXL: Story = {
  args: {
    children: "Text",
    variant: "outline",
    size: 'xl',
  },
};

export const Disabled: Story = {
  args: {
    children: "Text",
    variant: "outline",
    disabled: true,
  },
};

export const DisabledDark: Story = {
  args: {
    children: "Text",
    variant: "outline",
    disabled: true,
  },
};

DisabledDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square: Story = {
  args: {
    children: "<",
    variant: "outline",
    square: true,
  },
};

export const SquarL: Story = {
  args: {
    children: "<",
    variant: "outline",
    square: true,
    size: 'l',
  },
};

export const SquarXL: Story = {
  args: {
    children: "<",
    variant: "outline",
    square: true,
    size: 'xl',
  },
};

export const FullWidth: Story = {
  args: {
    children: "<",
    fullWidth: true,
  },
};
