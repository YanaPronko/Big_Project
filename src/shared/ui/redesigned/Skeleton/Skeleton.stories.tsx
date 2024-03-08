import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { SkeletonRedesigned } from "./Skeleton";

const meta: Meta<typeof SkeletonRedesigned> = {
  title: "shared/SkeletonRedesigned",
  component: SkeletonRedesigned,
  decorators: [RedesignedThemeDecorator()],
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

PrimaryDark.decorators = [RedesignedThemeDecorator(Theme.DARK)];

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

CircleDark.decorators = [RedesignedThemeDecorator(Theme.DARK)];
