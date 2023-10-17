import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme/lib/ThemeContext';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleListPage from './ArticleListPage';

// const entities = entitiesMock;
// const ids = ['1', '2'];
const meta: Meta<typeof ArticleListPage> = {
  title: 'pages/ArticleListPages/ArticleListPage',
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
