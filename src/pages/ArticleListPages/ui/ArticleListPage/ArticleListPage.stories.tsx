import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme/lib/ThemeContext';
import ArticleListPage from './ArticleListPage';

const meta: Meta<typeof ArticleListPage> = {
  title: 'pages/ ArticleListPage',
  component: ArticleListPage,
};

export default meta;
type Story = StoryObj<typeof ArticleListPage>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
