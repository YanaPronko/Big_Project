import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme/lib/ThemeContext';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';

const meta: Meta<typeof ArticleTextBlockComponent> = {
  title: 'shared/ArticleTextBlockComponent',
  component: ArticleTextBlockComponent,
};

export default meta;
type Story = StoryObj<typeof ArticleTextBlockComponent>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
