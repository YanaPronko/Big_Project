import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme/lib/ThemeContext';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

const meta: Meta<typeof ArticleImageBlockComponent> = {
  title: 'shared/ArticleImageBlockComponent',
  component: ArticleImageBlockComponent,
};

export default meta;
type Story = StoryObj<typeof ArticleImageBlockComponent>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
