import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme/lib/ThemeContext';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {
  args: {
    comment: {
      id: '1',
      text: 'hello',
      articleId: '1',
      user: {
        id: '1',
        username: 'vasya',
      },
    },
  },
};

export const PrimaryDark: Story = {
  args: {
    comment:
      {
        id: '1',
        text: 'hello',
        articleId: '1',
        user: {
          id: '1',
          username: 'vasya',
        },
      },
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingCard: Story = {
  args: {
    isLoading: true,
  },
};
export const LoadingCardDark: Story = {
  args: {
    isLoading: true,
  },
};

LoadingCardDark.decorators = [ThemeDecorator(Theme.DARK)];
