import { Meta, StoryObj } from '@storybook/react';

import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import ArticleEditPage from './ArticleEditPage';

const meta: Meta<typeof ArticleEditPage> = {
  title: 'pages/ArticleEditPage',
  component: ArticleEditPage,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const CreatePage: Story = {
  args: {},
  parameters: {
    router: {
      path: '/articles/new',
      route: '/articles/new',
    },
  },
};

export const EditPage: Story = {
  args: {},
  parameters: {
    router: {
      path: '/articles/:id/edit',
      route: '/articles/1/edit',
    },
  },
};
