import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { ArticleDetailsComments } from "./ArticleDetailsComments";

const meta: Meta<typeof ArticleDetailsComments> = {
  title: "pages/ ArticleDetailsPage/ArticleDetailsComments",
  component: ArticleDetailsComments,
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsComments>;

export const Primary: Story = {
  args: {
    id: "1",
  },
};

Primary.decorators = [
  StoreDecorator({
    comments: {
      entities: {
        1: {
          id: "1",
          text: "some comment",
          articleId: "1",
          user: {
            id: "1",
            username: "Vasia",
          },
        },
        2: {
          id: "2",
          text: "some comment#2",
          articleId: "1",
          user: {
            id: "2",
            username: "Yana",
          },
        },
      },
      ids: [1, 2],
    },
  }),
];

export const PrimaryRedesigned: Story = {
  args: {
    id: "1",
  },
};

PrimaryRedesigned.decorators = [
  StoreDecorator({
    comments: {
      entities: {
        1: {
          id: "1",
          text: "some comment",
          articleId: "1",
          user: {
            id: "1",
            username: "Vasia",
          },
        },
        2: {
          id: "2",
          text: "some comment#2",
          articleId: "1",
          user: {
            id: "2",
            username: "Yana",
          },
        },
      },
      ids: [1, 2],
    },
  }),
  RedesignedThemeDecorator(),
];

export const PrimaryDark: Story = {
  args: {
    id: "1",
  },
};

PrimaryDark.decorators = [
  StoreDecorator({
    comments: {
      entities: {
        1: {
          id: "1",
          text: "some comment",
          articleId: "1",
          user: {
            id: "1",
            username: "Vasia",
          },
        },
        2: {
          id: "2",
          text: "some comment#2",
          articleId: "1",
          user: {
            id: "2",
            username: "Yana",
          },
        },
      },
      ids: [1, 2],
    },
  }),
  ThemeDecorator(Theme.DARK),
];

export const PrimaryDarkRedesigned: Story = {
  args: {
    id: "1",
  },
};

PrimaryDarkRedesigned.decorators = [
  StoreDecorator({
    comments: {
      entities: {
        1: {
          id: "1",
          text: "some comment",
          articleId: "1",
          user: {
            id: "1",
            username: "Vasia",
          },
        },
        2: {
          id: "2",
          text: "some comment#2",
          articleId: "1",
          user: {
            id: "2",
            username: "Yana",
          },
        },
      },
      ids: [1, 2],
    },
  }),
  RedesignedThemeDecorator(Theme.DARK),
];

export const Loading: Story = {
  args: {
    id: "1",
  },
};

Loading.decorators = [
  StoreDecorator({
    comments: {
      entities: {
        1: {
          id: "1",
          text: "some comment",
          articleId: "1",
          user: {
            id: "1",
            username: "Vasia",
          },
        },
        2: {
          id: "2",
          text: "some comment#2",
          articleId: "1",
          user: {
            id: "2",
            username: "Yana",
          },
        },
      },
      ids: [1, 2],
      isLoading: true,
    },
  }),
  ThemeDecorator(Theme.DARK),
];

export const LoadingRedesigned: Story = {
  args: {
    id: "1",
  },
};

LoadingRedesigned.decorators = [
  StoreDecorator({
    comments: {
      entities: {
        1: {
          id: "1",
          text: "some comment",
          articleId: "1",
          user: {
            id: "1",
            username: "Vasia",
          },
        },
        2: {
          id: "2",
          text: "some comment#2",
          articleId: "1",
          user: {
            id: "2",
            username: "Yana",
          },
        },
      },
      ids: [1, 2],
      isLoading: true,
    },
  }),
  RedesignedThemeDecorator(Theme.DARK),
];
