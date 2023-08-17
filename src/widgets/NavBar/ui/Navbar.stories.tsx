import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme/lib/ThemeContext';
import { NavBar } from './NavBar';

const meta: Meta<typeof NavBar> = {
  title: 'widgets/NavBar',
  component: NavBar,
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Normal: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
