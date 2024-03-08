import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { ArticleListItemRedesigned } from "./ArticleListItemRedesigned";
import { articleMock } from "../../../model/mocks/articles";

const meta: Meta<typeof ArticleListItemRedesigned> = {
  title: "entities/Article/ArticleListItemRedesigned",
  component: ArticleListItemRedesigned,
  decorators: [RedesignedThemeDecorator()],
};

export default meta;
type Story = StoryObj<typeof ArticleListItemRedesigned>;

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

GridDark.decorators = [RedesignedThemeDecorator(Theme.DARK)];

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

ListDark.decorators = [RedesignedThemeDecorator(Theme.DARK)];
