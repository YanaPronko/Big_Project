import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/providers/Theme/lib/ThemeContext';
import { ArticleDetailsComments } from './ArticleDetailsComments';

const meta: Meta<typeof ArticleDetailsComments> = {
  title: 'pages/ ArticleDetailsPage/ArticleDetailsComments',
  component: ArticleDetailsComments,
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsComments>;

export const Primary: Story = {
  args: {
    id: '1',
  },
};

Primary.decorators = [
  StoreDecorator({}),
];

export const PrimaryDark: Story = {
  args: {
    id: '1',
  },
};

PrimaryDark.decorators = [
  StoreDecorator({}),
  ThemeDecorator(Theme.DARK),
];
