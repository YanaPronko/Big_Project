import { Meta, StoryObj } from "@storybook/react";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { CommentCardDeprecated } from "./CommentCard";
import IMG from "../../../../shared/assets/test/avatar.png";

const meta: Meta<typeof CommentCardDeprecated> = {
  title: "entities/Comment/CommentCardDeprecated",
  component: CommentCardDeprecated,
};

export default meta;
type Story = StoryObj<typeof CommentCardDeprecated>;

export const Primary: Story = {
  args: {
    comment: {
      id: "1",
      text: "hello",
      articleId: "1",
      user: {
        id: "1",
        username: "vasya",
        avatar: IMG,
      },
    },
  },
};

export const PrimaryDark: Story = {
  args: {
    comment: {
      id: "1",
      text: "hello",
      articleId: "1",
      user: {
        id: "1",
        username: "vasya",
        avatar: IMG,
      },
    },
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingCard: Story = {
  args: {
    isLoading: true,
  },
};
export const LoadingCardDark: Story = {
  args: {
    isLoading: true,
  },
};

LoadingCardDark.decorators = [ThemeDecorator(Theme.DARK)];
