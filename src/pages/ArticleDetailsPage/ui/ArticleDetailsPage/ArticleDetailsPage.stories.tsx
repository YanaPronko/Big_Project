import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme/lib/ThemeContext';
import ArticleDetailsPage from './ArticleDetailsPage';

const meta: Meta<typeof ArticleDetailsPage> = {
  title: 'pages/ ArticleDetailsPage',
  component: ArticleDetailsPage,
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
