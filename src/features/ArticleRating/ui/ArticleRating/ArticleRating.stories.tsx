import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import ArticleRating from "./ArticleRating";

const meta: Meta<typeof ArticleRating> = {
  title: "features/ArticleRating",
  component: ArticleRating,
  args: {
    articleId: "2",
  },
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Primary: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: "GET",
        status: 200,
        response: [{ rate: 4 }],
      },
    ],
  },
};

export const PrimaryRedesigned: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: "GET",
        status: 200,
        response: [{ rate: 4 }],
      },
    ],
  },
};

PrimaryRedesigned.decorators = [RedesignedThemeDecorator()];

export const PrimaryDark: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: "GET",
        status: 200,
        response: [{ rate: 4 }],
      },
    ],
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDarkRedesigned: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: "GET",
        status: 200,
        response: [{ rate: 4 }],
      },
    ],
  },
};

PrimaryDarkRedesigned.decorators = [
  RedesignedThemeDecorator(Theme.DARK),
];

export const WithoutRateDark: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: "GET",
        status: 200,
        response: [],
      },
    ],
  },
};

WithoutRateDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithoutRateDarkRedesigned: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: "GET",
        status: 200,
        response: [],
      },
    ],
  },
};

WithoutRateDarkRedesigned.decorators = [
  RedesignedThemeDecorator(Theme.DARK),
];
