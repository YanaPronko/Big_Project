import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme';
import { Drawer } from './Drawer';

const meta: Meta<typeof Drawer> = {
  title: 'shared/Drawer',
  component: Drawer,
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
