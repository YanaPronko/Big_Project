import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme/lib/ThemeContext';
import { ArticlesFilters } from './ArticlesFilters';

const meta: Meta<typeof ArticlesFilters> = {
  title: 'shared/ArticlesFilters',
  component: ArticlesFilters,
};

export default meta;
type Story = StoryObj<typeof ArticlesFilters>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
