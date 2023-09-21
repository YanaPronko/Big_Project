import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme/lib/ThemeContext';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

const meta: Meta<typeof ArticleCodeBlockComponent> = {
  title: 'shared/ArticleCodeBlockComponent',
  component: ArticleCodeBlockComponent,
};

export default meta;
type Story = StoryObj<typeof ArticleCodeBlockComponent>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
