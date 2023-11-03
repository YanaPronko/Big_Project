import { Meta, StoryObj } from '@storybook/react';
import { ArticleRating } from '@/features/ArticleRating';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/Theme';

const meta: Meta<typeof ArticleRating> = {
  title: 'features/ArticleRating',
  component: ArticleRating,
  args: {
    articleId: '2',
  },
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
