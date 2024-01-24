import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { RatingCard } from "./RatingCard";

const meta: Meta<typeof RatingCard> = {
  title: "entities/Rating/RatingCard",
  component: RatingCard,
  args: {
    title: "Article Rating",
    onAccept: action("onAccept"),
    onCancel: action("onCancel"),
  },
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithFeedback: Story = {
  args: {
    feedbackTitle: "Feedback",
  },
};
