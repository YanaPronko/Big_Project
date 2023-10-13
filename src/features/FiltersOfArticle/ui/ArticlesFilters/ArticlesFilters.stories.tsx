import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme/lib/ThemeContext';
import { ArticlesFilters } from './ArticlesFilters';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticlesFilters> = {
  title: 'features/ArticlesFilters',
  component: ArticlesFilters,
};

export default meta;
type Story = StoryObj<typeof ArticlesFilters>;


export const Primary: Story = {
  args: {},
};

Primary.decorators = [StoreDecorator({})];

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
