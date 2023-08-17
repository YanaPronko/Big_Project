import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme/lib/ThemeContext';
import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: 'primary',
  },
};

export const Inverted: Story = {
  args: {
    children: 'Text',
    theme: 'inverted',
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Text',
    theme: 'primary',
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedDark: Story = {
  args: {
    children: 'Text',
    theme: 'inverted',
  },
};

InvertedDark.decorators = [ThemeDecorator(Theme.DARK)];
