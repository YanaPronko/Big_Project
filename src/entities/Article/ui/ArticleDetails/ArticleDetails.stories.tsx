import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme/lib/ThemeContext';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetails } from './ArticleDetails';

const meta: Meta<typeof ArticleDetails> = {
  title: 'shared/ArticleDetails',
  component: ArticleDetails,
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Primary: Story = {
  args: {},
};

Primary.decorators = [StoreDecorator({ articleDetails: {} })];

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [StoreDecorator({ articleDetails: {} }), ThemeDecorator(Theme.DARK)];
