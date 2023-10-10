import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme/lib/ThemeContext';
import { ArticlesList } from './ArticlesList';
import { articlesMock } from '../../model/mocks/articles';

const meta: Meta<typeof ArticlesList> = {
  title: 'entities/Article/ArticlesList',
  component: ArticlesList,
};

export default meta;
type Story = StoryObj<typeof ArticlesList>;

export const Grid: Story = {
  args: {
    articles: articlesMock,
    view: 'grid',
  },
};

export const GridDark: Story = {
  args: {
    articles: articlesMock,
    view: 'grid',
  },
};

GridDark.decorators = [ThemeDecorator(Theme.DARK)];

export const List: Story = {
  args: {
    articles: articlesMock,
    view: 'list',
  },
};

export const ListDark: Story = {
  args: {
    articles: articlesMock,
    view: 'list',
  },
};

ListDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ListIsLoading: Story = {
  args: {
    view: 'list',
    isLoading: true,
  },
};

export const ListIsLoadingDark: Story = {
  args: {
    view: 'list',
    isLoading: true,
  },
};

ListIsLoadingDark.decorators = [ThemeDecorator(Theme.DARK)];

export const GridIsLoading: Story = {
  args: {
    view: 'grid',
    isLoading: true,
  },
};

export const GridIsLoadingDark: Story = {
  args: {
    view: 'grid',
    isLoading: true,
  },
};

GridIsLoadingDark.decorators = [ThemeDecorator(Theme.DARK)];