import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { CommentCardRedesigned } from "./CommentCard";
import IMG from "../../../../../shared/assets/icons/user-32-32.png";

const meta: Meta<typeof CommentCardRedesigned> = {
  title: "entities/Comment/CommentCardRedesigned",
  component: CommentCardRedesigned,
};

export default meta;
type Story = StoryObj<typeof CommentCardRedesigned>;

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

Primary.decorators = [RedesignedThemeDecorator()];

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

PrimaryDark.decorators = [RedesignedThemeDecorator(Theme.DARK)];

export const LoadingCard: Story = {
  args: {
    isLoading: true,
  },
};

LoadingCard.decorators = [RedesignedThemeDecorator()];

export const LoadingCardDark: Story = {
  args: {
    isLoading: true,
  },
};

LoadingCardDark.decorators = [RedesignedThemeDecorator(Theme.DARK)];
