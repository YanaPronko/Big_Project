import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme/lib/ThemeContext';
import { ArticlesTypesTabs } from './ArticlesTypesTabs';

const meta: Meta<typeof ArticlesTypesTabs> = {
  title: 'shared/ArticlesTypesTabs',
  component: ArticlesTypesTabs,
};

export default meta;
type Story = StoryObj<typeof ArticlesTypesTabs>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
