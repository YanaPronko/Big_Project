import { Meta, StoryObj } from "@storybook/react";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { SkeletonRedesigned } from "./Skeleton";

const meta: Meta<typeof SkeletonRedesigned> = {
  title: "shared/Skeleton",
  component: SkeletonRedesigned,
};

export default meta;
type Story = StoryObj<typeof SkeletonRedesigned>;

export const Primary: Story = {
  args: {
    width: "100%",
    height: 200,
  },
};

export const PrimaryDark: Story = {
  args: {
    width: "100%",
    height: 200,
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Circle: Story = {
  args: {
    width: 100,
    height: 100,
    borderRadius: "50%",
  },
};

export const CircleDark: Story = {
  args: {
    width: 100,
    height: 100,
    borderRadius: "50%",
  },
};

CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
