import { Meta, StoryObj } from "@storybook/react";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { CommentList } from "./CommentList";

const meta: Meta<typeof CommentList> = {
  title: "entities/Comment/CommentList",
  component: CommentList,
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
  args: {
    comments: [
      {
        id: "1",
        text: "hello",
        articleId: "1",
        user: {
          id: "1",
          username: "vasya",
        },
      },
      {
        id: "2",
        text: "HEY",
        articleId: "1",
        user: {
          id: "2",
          username: "Yana",
        },
      },
    ],
  },
};

export const PrimaryDark: Story = {
  args: {
    comments: [
      {
        id: "1",
        text: "hello",
        articleId: "1",
        user: {
          id: "1",
          username: "vasya",
        },
      },
      {
        id: "2",
        text: "HEY",
        articleId: "1",
        user: {
          id: "2",
          username: "Yana",
        },
      },
    ],
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
