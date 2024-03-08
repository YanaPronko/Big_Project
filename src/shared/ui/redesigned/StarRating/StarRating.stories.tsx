import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { StarRatingRedesigned } from "./StarRating";

const meta: Meta<typeof StarRatingRedesigned> = {
  title: "shared/StarRatingRedesigned",
  component: StarRatingRedesigned,
  args: {
    size: 50,
    onSelect: action("OnSelect"),
  },
  decorators: [RedesignedThemeDecorator()],
};

export default meta;
type Story = StoryObj<typeof StarRatingRedesigned>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [RedesignedThemeDecorator(Theme.DARK)];

export const Selected: Story = {
  args: {
    selectedStars: 3,
  },
};
