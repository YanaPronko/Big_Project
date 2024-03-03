import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { StarRatingRedesigned } from "./StarRating";

const meta: Meta<typeof StarRatingRedesigned> = {
  title: "shared/StarRating",
  component: StarRatingRedesigned,
  args: {
    size: 50,
    onSelect: action("OnSelect"),
  },
};

export default meta;
type Story = StoryObj<typeof StarRatingRedesigned>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Selected: Story = {
  args: {
    selectedStars: 3,
  },
};
