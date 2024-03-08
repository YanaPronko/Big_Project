import { Meta, StoryObj } from "@storybook/react";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { ArticleListItemDeprecated } from "./ArticleListItemDeprecated";
import { articleMock } from "../../../model/mocks/articles";

const meta: Meta<typeof ArticleListItemDeprecated> = {
  title: "entities/Article/ArticleListItemDeprecated",
  component: ArticleListItemDeprecated,
};

export default meta;
type Story = StoryObj<typeof ArticleListItemDeprecated>;

export const Grid: Story = {
  args: {
    article: articleMock,
    view: "grid",
  },
};

export const GridDark: Story = {
  args: {
    article: articleMock,
    view: "grid",
  },
};

GridDark.decorators = [ThemeDecorator(Theme.DARK)];

export const List: Story = {
  args: {
    article: articleMock,
    view: "list",
  },
};

export const ListDark: Story = {
  args: {
    article: articleMock,
    view: "list",
  },
};

ListDark.decorators = [ThemeDecorator(Theme.DARK)];
