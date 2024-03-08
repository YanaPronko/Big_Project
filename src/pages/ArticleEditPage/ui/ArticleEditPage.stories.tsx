import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

import ArticleEditPage from "./ArticleEditPage";

const meta: Meta<typeof ArticleEditPage> = {
  title: "pages/ArticleEditPage",
  component: ArticleEditPage,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const CreatePage: Story = {
  args: {},
  parameters: {
    router: {
      path: "/articles/new",
      route: "/articles/new",
    },
  },
};

export const CreatePageRedesigned: Story = {
  args: {},
  parameters: {
    router: {
      path: "/articles/new",
      route: "/articles/new",
    },
  },
};

CreatePageRedesigned.decorators = [RedesignedThemeDecorator()];

export const EditPage: Story = {
  args: {},
  parameters: {
    router: {
      path: "/articles/:id/edit",
      route: "/articles/1/edit",
    },
  },
};

export const EditPageRedesigned: Story = {
  args: {},
  parameters: {
    router: {
      path: "/articles/:id/edit",
      route: "/articles/1/edit",
    },
  },
};

EditPageRedesigned.decorators = [RedesignedThemeDecorator()];
