import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme';
import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
  title: 'shared/Popover',
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
