import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme/lib/ThemeContext';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { articlesMock } from 'entities/Article/model/mocks/articles';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const meta: Meta<typeof ArticleRecommendationsList> = {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

export const Primary: Story = {
  args: {},
};
Primary.decorators = [StoreDecorator({
  rtkApi: {
    queries: {
      getArticleRecommendations: {
        data: articlesMock,
      },
    },
  },
}), ThemeDecorator(Theme.DARK)];

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
