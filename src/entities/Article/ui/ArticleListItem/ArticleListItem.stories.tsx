import { Meta, StoryObj } from '@storybook/react';

import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { articleMock } from '../../model/mocks/articles';

import { ArticleListItem } from './ArticleListItem';

const meta: Meta<typeof ArticleListItem> = {
  title: 'entities/Article/ArticleListItem',
  component: ArticleListItem,
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;

export const Grid: Story = {
  args: {
    article: articleMock,
    view: 'grid',
  },
};

export const GridDark: Story = {
  args: {
    article: articleMock,
    view: 'grid',
  },
};

GridDark.decorators = [ThemeDecorator(Theme.DARK)];

export const List: Story = {
  args: {
    article: articleMock,
    view: 'list',
  },
};

export const ListDark: Story = {
  args: {
    article: articleMock,
    view: 'list',
  },
};

ListDark.decorators = [ThemeDecorator(Theme.DARK)];
