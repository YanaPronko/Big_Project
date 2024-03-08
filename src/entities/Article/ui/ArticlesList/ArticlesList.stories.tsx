import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { ArticlesList } from "./ArticlesList";
import { articlesMock } from "../../model/mocks/articles";

const meta: Meta<typeof ArticlesList> = {
  title: "entities/Article/ArticlesList",
  component: ArticlesList,
};

export default meta;
type Story = StoryObj<typeof ArticlesList>;

export const Grid: Story = {
  args: {
    articles: articlesMock,
    view: "grid",
  },
};

export const GridRedesigned: Story = {
  args: {
    articles: articlesMock,
    view: "grid",
  },
};

GridRedesigned.decorators = [RedesignedThemeDecorator()];

export const GridDark: Story = {
  args: {
    articles: articlesMock,
    view: "grid",
  },
};

GridDark.decorators = [ThemeDecorator(Theme.DARK)];

export const GridDarkredesigned: Story = {
  args: {
    articles: articlesMock,
    view: "grid",
  },
};

GridDarkredesigned.decorators = [
  RedesignedThemeDecorator(Theme.DARK),
];

export const List: Story = {
  args: {
    articles: articlesMock,
    view: "list",
  },
};

export const ListRedesigned: Story = {
  args: {
    articles: articlesMock,
    view: "list",
  },
};

ListRedesigned.decorators = [RedesignedThemeDecorator()];

export const ListDark: Story = {
  args: {
    articles: articlesMock,
    view: "list",
  },
};

ListDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ListDarkRedesigned: Story = {
  args: {
    articles: articlesMock,
    view: "list",
  },
};

ListDarkRedesigned.decorators = [
  RedesignedThemeDecorator(Theme.DARK),
];

export const ListIsLoading: Story = {
  args: {
    view: "list",
    isLoading: true,
    articles: [],
  },
};

export const ListIsLoadingRedesigned: Story = {
  args: {
    view: "list",
    isLoading: true,
    articles: [],
  },
};

ListIsLoadingRedesigned.decorators = [RedesignedThemeDecorator()];

export const ListIsLoadingDark: Story = {
  args: {
    view: "list",
    isLoading: true,
    articles: [],
  },
};

ListIsLoadingDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ListIsLoadingDarkRedesigned: Story = {
  args: {
    view: "list",
    isLoading: true,
    articles: [],
  },
};

ListIsLoadingDarkRedesigned.decorators = [
  RedesignedThemeDecorator(Theme.DARK),
];

export const GridIsLoading: Story = {
  args: {
    view: "grid",
    isLoading: true,
    articles: [],
  },
};

export const GridIsLoadingRedesigned: Story = {
  args: {
    view: "grid",
    isLoading: true,
    articles: [],
  },
};

GridIsLoadingRedesigned.decorators = [RedesignedThemeDecorator()];

export const GridIsLoadingDark: Story = {
  args: {
    view: "grid",
    isLoading: true,
    articles: [],
  },
};

GridIsLoadingDark.decorators = [ThemeDecorator(Theme.DARK)];

export const GridIsLoadingDarkRedesigned: Story = {
  args: {
    view: "grid",
    isLoading: true,
    articles: [],
  },
};

GridIsLoadingDarkRedesigned.decorators = [
  RedesignedThemeDecorator(Theme.DARK),
];
